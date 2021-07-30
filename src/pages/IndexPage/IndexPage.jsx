import { useState } from 'react';
import useFitText from "use-fit-text";
import SearchForm from '../../components/SearchForm/SearchForm'
import './IndexPage.css';

export default function IndexPage() {
  const [sequence, setSequence] = useState([]);
  const [viewStart, setViewStart] = useState(0);
  const { fontSize, ref } = useFitText();

  return (
    <main className="OAIS">
      <h1>Online Atlas of Integer Sequences</h1>
      <SearchForm sequence = {sequence} setSequence = {setSequence} viewStart= {viewStart} setViewStart={setViewStart}/>
      <div id='sequence'>
          {sequence.slice(viewStart, viewStart + 20).map((x, idx) => {
            return (
              <div className="test" ref={ref} value={x} key={idx}>
                {x}
              </div>
            )
          })}
        </div>
    </main>
  );
}