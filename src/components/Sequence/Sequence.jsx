import { useState } from 'react';
import rainbow from '../../utilities/rainbow'
import MovementButton from '../../components/MovementButton/MovementButton'
import './Sequence.css';

export default function Sequence({ viewStart, setViewStart, sequence, width }) {
  const [showIndex, setShowIndex] = useState(false);

  async function handleShowIndex() {
    setShowIndex(!showIndex);
  }

  return (
    <>
      <h1>{!!sequence.sequenceId && `Sequence ${sequence.sequenceId}`}</h1>

      <button disabled={sequence.sequenceId === ''} onClick={handleShowIndex}>{showIndex ? `Hide` : `Show`} index</button>
      <div className="OAIS">
        <div>
          <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'left'} />
        </div>
        <div id='sequence'>
          {sequence.sequence.slice(viewStart, viewStart + 10).map((x, idx) => {
            let color = rainbow(((viewStart + idx) % 100) / Math.min(100, sequence.sequence.length) + .001);
            return (
              <div className="integer" style={{ width: `${width}px`, position: "absolute", left: `${idx * (width * .78) + 40}px` }} key={viewStart + idx}>
                <div style={{ backgroundColor: color }} className="chevron" value={+x} key={viewStart + idx}>
                  <p className="number">{x}</p>
                </div>
                <div id="index-view">{showIndex && 1 + viewStart + idx}</div>
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