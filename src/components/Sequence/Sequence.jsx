import { useState } from 'react';
import MovementButton from '../../components/MovementButton/MovementButton'
import ResetPositionButton from '../../components/ResetPositionButton/ResetPositionButton'
import SetModButton from '../SetModButton/SetModButton';
import './Sequence.css';
import SequenceView from '../SequenceView/SequenceView';

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
        <SequenceView modulus={modulus} showIndex={showIndex} viewStart={viewStart} sequence={sequence} width={width} />
        <div>
          <MovementButton viewStart={viewStart} setViewStart={setViewStart} direction={'right'} />
        </div>
        <ResetPositionButton viewStart={viewStart} setViewStart={setViewStart} />
      </div>
      <SetModButton sequence={sequence} modulus={modulus} setModulus={setModulus} />
    </>
  );
}