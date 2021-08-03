import { useState } from 'react';
import colorizer from '../../utilities/color'
import NewRowButton from '../NewRowButton/NewRowButton';
import './TriangleView.css';

export default function TriangleView({ modulus, showIndex, sequence, width }) {
  const [rows,setRows] = useState(10);
  const triangleArray = [];
  for (let i = 0; i < rows; i++) {
    let rowArray = [];
    for (let j = 0; j <= i; j++) {
      rowArray.push(i * (i + 1) / 2 + j);
    }
    triangleArray.push(rowArray);
  }
  return (
    !!sequence.sequence.length &&
    <div id="triangle">

      {triangleArray.map((row, idx) => {
        return (

          <div key={idx} className="row" position="relative">
            {row.map(elt => {
              let color = colorizer(sequence.sequence, sequence.sequence[elt], elt, 0, modulus);
              return (

                <div className="integer" style={{ width: `${width}px` }} key={elt}>
                  <div style={{ backgroundColor: color }} className="hexagon" value={sequence.sequence[elt]} key={elt}>{sequence.sequence[elt]}</div>
                </div>
              )
            })}
          </div>
        )

      })}
      <NewRowButton rows={rows} setRows={setRows}/>
    </div>
  );
}