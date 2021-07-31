import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
import MovementButtons from '../../components/MovementButtons/MovementButtons'
import ZoomButtons from '../../components/ZoomButtons/ZoomButtons';
import Sequence from '../../components/Sequence/Sequence'
import './IndexPage.css';

export default function IndexPage() {
  const [sequence, setSequence] = useState([]);
  const [viewStart, setViewStart] = useState(0);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    async function resetViewStart() {
      setViewStart(0);
    }
    resetViewStart();
  }, [sequence]);

  return (
    <main className="Index">
      <h1>Online Atlas of Integer Sequences</h1>
      <SearchForm setSequence={setSequence} />
      <MovementButtons viewStart={viewStart} setViewStart={setViewStart} />
      <ZoomButtons width={width} setWidth={setWidth} />
      <Sequence viewStart={viewStart} sequence={sequence} width={width} />
    </main>
  );
}