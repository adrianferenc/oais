import MovementButton from '../../components/MovementButton/MovementButton'
import ResetPositionButton from '../../components/ResetPositionButton/ResetPositionButton'
import colorizer from '../../utilities/color'
import grayizer from '../../utilities/gray'
import './SequenceView.css';

export default function SequenceView({ showIndex, colorModulus, viewStart, setViewStart, sequence, width, inColor }) {
  

  return (
    <div className="sequence-view">
      
      <div className="OAIS">
        <div>
          <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'left'} />
        </div>
        <br />
        <div id='sequence'>

          {sequence.sequence.slice(viewStart, viewStart + 10).map((x, idx) => {
            let color = inColor ? colorizer(sequence.sequence, x, idx, viewStart, colorModulus) : grayizer(sequence.sequence, x, idx, viewStart, colorModulus);
            return (
              <div className="integer" style={{ zIndex: 1, width: `${width}px`, position: "absolute", left: `${idx * (width * .78) + 40}px` }} key={viewStart + idx}>
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
      </div>
      <div><ResetPositionButton viewStart={viewStart} setViewStart={setViewStart} /></div>
    </div>
  );
}