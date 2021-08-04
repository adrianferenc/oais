import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
import ZoomButtons from '../../components/ZoomButtons/ZoomButtons';
import Sequence from '../../components/Sequence/Sequence'
import './SequencePage.css';
import AddFavoriteButton from '../../components/AddFavoriteButton/AddFavoriteButton';
import GraphView from '../../components/GraphView/GraphView';

export default function SequencePage({sequence, setSequence, user, setUser}) {
  
  const [viewStart, setViewStart] = useState(0);
  const [width, setWidth] = useState(60);
  const [showGraph, setShowGraph] = useState(false);
  const [inColor, setInColor] = useState(true);


  return (
    <main className="Index">
      <h1>Online Atlas of Integer Sequences</h1>
      <ZoomButtons width={width} setWidth={setWidth} />
      <SearchForm sequence = {sequence} setSequence={setSequence} />
      <Sequence viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} setSequence={setSequence} width={width}  inColor = {inColor} setInColor = {setInColor}/>
      <AddFavoriteButton sequence={sequence} user={user} setUser={setUser}/>
      <GraphView showGraph = {showGraph} setShowGraph={setShowGraph} sequence={sequence}/>
    </main>
  );
}