import { useState } from 'react';
import colorizer from '../../utilities/color'
import grayizer from '../../utilities/gray';
import ChangeRowButton from '../ChangeRowButton/ChangeRowButton';
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import './TriangleView.css';

export default function TriangleView({ colorModulus, numberModulus, sequence, width, inColor, triangleRef }) {
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
    <Container className="d-flex justify-content-center" ref = {triangleRef} style={{ overflowX: 'auto', overflowY: 'auto', margin: '0 5rem', whiteSpace: 'nowrap' }}>
      <Container id="triangle" >

        {triangleArray.map((row, idx) => {
          return (

            <span key={idx} className="d-flex flex-row justify-content-center">
              {row.map(elt => {
                let color = inColor ? colorizer(sequence.sequence, sequence.sequence[elt], elt, 0, colorModulus) : grayizer(sequence.sequence, sequence.sequence[elt], elt, 0, colorModulus);
                return (
                  <div className="integer" style={{ width: `${width}px` }} key={elt}>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip className="d-inline-flex">
                          <span style={{ width: "100%" }}>{numberModulus === null ? sequence.sequence[elt] : (+sequence.sequence[elt] % numberModulus)}</span>
                        </Tooltip>
                      }
                    >
                      <div style={{ backgroundColor: color, fontFamily: 'monospace' }} className="hexagon" value={sequence.sequence[elt]} key={elt}>{numberModulus === null ? sequence.sequence[elt] : (+sequence.sequence[elt] % numberModulus)}</div>
                    </OverlayTrigger>
                  </div>
                )
              })}
            </span>
          )

        })}
        <Container style={{ marginTop: '2rem' }}>
          <ChangeRowButton rows={rows} setRows={setRows} />
        </Container>
      </Container>
    </Container>
  );
}