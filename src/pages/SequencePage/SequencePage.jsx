import { useState } from 'react';
import Sequence from '../../components/Sequence/Sequence'
import './SequencePage.css';
import GraphView from '../../components/GraphView/GraphView';

export default function SequencePage({sequence, setSequence, user, setUser, showIndex, width, inColor, colorModulus, showGraph, setShowGraph}) {
  
  const [viewStart, setViewStart] = useState(0);


  return (
    <div className="Index">
      <h1>Online Atlas of Integer Sequences</h1>
      
      
      <Sequence user = {user} setUser={setUser} showIndex = {showIndex} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} setSequence={setSequence} width={width} inColor={inColor} colorModulus={colorModulus}/>
      <GraphView showGraph = {showGraph} setShowGraph={setShowGraph} sequence={sequence}/>
    </div>
  );
}