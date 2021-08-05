import MovementButton from '../../components/MovementButton/MovementButton'
import ResetPositionButton from '../../components/ResetPositionButton/ResetPositionButton'
import colorizer from '../../utilities/color'
import grayizer from '../../utilities/gray'
import './SequenceView.css';

export default function SequenceView({ showIndex, numberModulus, colorModulus, viewStart, setViewStart, sequence, width, inColor }) {

  return (
    <div className="sequence-view">
        
      <br />
      <div id='sequence'>

        {sequence.sequence.slice(viewStart, viewStart + 10).map((x, idx) => {
          let color = inColor ? colorizer(sequence.sequence, x, idx, viewStart, colorModulus) : grayizer(sequence.sequence, x, idx, viewStart, colorModulus);
          return (
            <div className="integer" style={{ width: `${width}px` }} key={viewStart + idx}>
              <div style={{ backgroundColor: color }} className="chevron" value={+x} key={viewStart + idx}>
                <p className="number">{numberModulus === null ? x : (+x % numberModulus)}</p>
              </div>
              <div id="index-view">{showIndex && viewStart + idx}</div>
            </div>
          )
        })}
      </div>
      <div className='movement-buttons'>
        <div>
          <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'left'} />
        </div>
        <div><ResetPositionButton viewStart={viewStart} setViewStart={setViewStart} /></div>
        <div>
          <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'right'} />
        </div>
      </div>
    </div>
  );
}