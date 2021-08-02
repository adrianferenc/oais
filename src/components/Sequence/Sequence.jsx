import { useState } from 'react';
import colorizer from '../../utilities/color'
import MovementButton from '../../components/MovementButton/MovementButton'
import ResetPositionButton from '../../components/ResetPositionButton/ResetPositionButton'
import SetModButton from '../SetModButton/SetModButton';
import './Sequence.css';

export default function Sequence({ viewStart, setViewStart, sequence, width }) {
  const [showIndex, setShowIndex] = useState(false);
  const [modulus, setModulus] = useState(null);

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
        <ResetPositionButton viewStart={viewStart} setViewStart={setViewStart} />
      </div>
      <SetModButton sequence={sequence} modulus={modulus} setModulus={setModulus} />
    </>
  );
}