import { useState } from 'react';
import SetModButton from '../SetModButton/SetModButton';
import './Sequence.css';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';

export default function Sequence({ viewStart, setViewStart, sequence, width }) {
  const [modulus, setModulus] = useState(null);


  return (
    <>
      <h1>{!!sequence.sequenceId && `Sequence ${sequence.sequenceId}`}</h1>

      <SetModButton sequence={sequence} modulus={modulus} setModulus={setModulus} />

      <SequenceView modulus={modulus} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} />

      <TriangleView sequence={sequence} modulus={modulus} width={width} />
    </>
  );
}