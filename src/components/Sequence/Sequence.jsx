import rainbow from '../../utilities/rainbow'
import MovementButton from '../../components/MovementButton/MovementButton'
import './Sequence.css';

export default function Sequence({ viewStart, setViewStart, sequence, width }) {

  return (
    <>
      <h1>{!!sequence.sequenceId && `Sequence ${sequence.sequenceId}`}</h1>


      <div className="OAIS">
        <div>
          <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'left'} />
        </div>
        <div id='sequence'>
          {sequence.sequence.slice(viewStart, viewStart + 10).map((x, idx) => {
            let color = rainbow(((viewStart + idx) % 100) / Math.min(100, sequence.sequence.length) + .001);
            return (
              <div style={{ backgroundColor: color, width: `${width}px`, position: "absolute", left: `${idx * (width * .78) + 40}px` }} className="chevron" value={+x} key={viewStart + idx}>
                <p className="number">{x}</p>
              </div>
            )
          })}
        </div>
        <div>
          <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'right'} />
        </div>
      </div>
    </>
  );
}