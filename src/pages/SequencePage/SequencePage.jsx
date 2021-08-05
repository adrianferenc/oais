import { useState } from 'react';
import Sequence from '../../components/Sequence/Sequence'
import './SequencePage.css';
import GraphView from '../../components/GraphView/GraphView';

export default function SequencePage({ sequence, setSequence, user, setUser, showIndex, width, inColor, numberModulus, colorModulus, showSequence, showTriangle, showGraph, setShowGraph, graphSize }) {

  const [viewStart, setViewStart] = useState(0);

  return (
    <div className="SequencePage">
      <div className='sequence'>
        <Sequence user={user} setUser={setUser} showIndex={showIndex} viewStart={viewStart} showSequence={showSequence} showTriangle={showTriangle} setViewStart={setViewStart} sequence={sequence} setSequence={setSequence} width={width} inColor={inColor} numberModulus={numberModulus} colorModulus={colorModulus} />
      </div>
      <GraphView showGraph={showGraph} setShowGraph={setShowGraph} sequence={sequence} graphSize={graphSize}/>
    </div>
  );
}