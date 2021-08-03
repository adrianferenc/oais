import MovementButton from '../../components/MovementButton/MovementButton'
import colorizer from '../../utilities/color'
import './SequenceView.css';

export default function SequenceView({ modulus, showIndex, viewStart, setViewStart, sequence, width }) {

  return (
    <>
      <div>
        <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'left'} />
      </div>
      <div id='sequence'>
        {sequence.sequence.slice(viewStart, viewStart + 10).map((x, idx) => {
          let color = colorizer(sequence.sequence, x, idx, viewStart, modulus);
          return (
            <div className="integer" style={{ width: `${width}px`, position: "absolute", left: `${idx * (width * .78) + 40}px` }} key={viewStart + idx}>
              <div style={{ backgroundColor: color }} className="chevron" value={+x} key={viewStart + idx}>
                <p className="number">{x}</p>
              </div>
              <div id="index-view">{showIndex && viewStart + idx}</div>
            </div>
          )
        })}
      </div>
      <div>
        <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'right'} />
      </div>
    </>
  );
}