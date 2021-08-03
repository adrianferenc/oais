import { useState } from 'react';
import ResetPositionButton from '../../components/ResetPositionButton/ResetPositionButton'
import SetModButton from '../SetModButton/SetModButton';
import './Sequence.css';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';

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

        <SequenceView modulus={modulus} showIndex={showIndex} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} />

        <ResetPositionButton viewStart={viewStart} setViewStart={setViewStart} />
      </div>
      <SetModButton sequence={sequence} modulus={modulus} setModulus={setModulus} />

      <TriangleView sequence={sequence} modulus={modulus} width={width} />
    </>
  );
}