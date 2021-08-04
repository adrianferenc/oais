import { useState } from 'react';
import SetModButton from '../SetModButton/SetModButton';
import './Sequence.css';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';
import ColorSwitch from '../ColorSwitch/ColorSwitch';
export default function Sequence({ viewStart, setViewStart, sequence, width, inColor, setInColor }) {
  const [modulus, setModulus] = useState(null);


  return (
    <>
      <h1>{!!sequence.sequenceId && `Sequence ${sequence.sequenceId}`}</h1>

      <SetModButton sequence={sequence} modulus={modulus} setModulus={setModulus} />

      <ColorSwitch inColor={inColor} setInColor={setInColor} />

      <SequenceView modulus={modulus} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} inColor={inColor} />

      <TriangleView sequence={sequence} modulus={modulus} width={width} inColor={inColor} />
    </>
  );
}