import { useState } from 'react';
import colorizer from '../../utilities/color'
import grayizer from '../../utilities/gray';
import ChangeRowButton from '../ChangeRowButton/ChangeRowButton';
import { Container } from "react-bootstrap";
import './TriangleView.css';

export default function TriangleView({ colorModulus, numberModulus, sequence, width, inColor }) {
  const [rows, setRows] = useState(10);
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
    <Container id="triangle">

      {triangleArray.map((row, idx) => {
        return (

          <Container key={idx} className="row" position="relative">
            {row.map(elt => {
              let color = inColor ? colorizer(sequence.sequence, sequence.sequence[elt], elt, 0, colorModulus) : grayizer(sequence.sequence, sequence.sequence[elt], elt, 0, colorModulus);
              return (

                <div className="integer" style={{ width: `${width}px` }} key={elt}>
                  <div style={{ backgroundColor: color }} className="hexagon" value={sequence.sequence[elt]} key={elt}>{numberModulus === null ? sequence.sequence[elt] : (+sequence.sequence[elt] % numberModulus)}</div>
                </div>
              )
            })}
          </Container>
        )

      })}
      <ChangeRowButton rows={rows} setRows={setRows} />
    </Container>
  );
}