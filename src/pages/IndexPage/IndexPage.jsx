import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
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
      <ZoomButtons width={width} setWidth={setWidth} />
      <SearchForm setSequence={setSequence} />
      <Sequence viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} />
    </main>
  );
}