import SetIndex from '../SetIndex/SetIndex'
import colorizer from '../../utilities/color'
import grayizer from '../../utilities/gray'
import './SequenceView.css';
import { useEffect, useState, createRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default function SequenceView({ showIndex, numberModulus, colorModulus, sequence, width, inColor }) {
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs(elRefs => (
      Array(sequence.sequence.length).fill().map((_, i) => elRefs[i] || createRef())
    ));
  }, [sequence.sequence]);

  const onClick = (i) => {
    elRefs[i].current.scrollIntoView({ inline: 'start', block: "nearest", behavior: 'smooth' });
  }

  return (
    <Row className="sequence-view">
      <Container className='d-flex justify-content-start' id='sequence' style={{ overflowX: 'auto' }}>
        {sequence.sequence.map((x, idx) => {
          let color = inColor ? colorizer(sequence.sequence, x, idx, colorModulus) : grayizer(sequence.sequence, x, idx, colorModulus);
          return (
            <Container key={idx} style={{ padding: '0' }}>
              <Container ref={elRefs[idx]} className="integer d-flex" style={{ display: 'inline-flex', padding: '0' }}>
                <Col style={{ backgroundColor: color }} className="chevron-left" >
                </Col><Col style={{ backgroundColor: color, fontFamily: 'monospace' }} className="chevron" value={+x} ><p>{numberModulus === null ? x : (+x % numberModulus)}
                </p></Col><Col style={{ backgroundColor: color, width: '2rem' }} className="chevron-right" ></Col>
              </Container>
              <Row id="index-view" style={{ fontSize: ".5rem " }}>{showIndex && idx}</Row>
            </Container>
          )
        })}
      </Container>
      <Col style={{ margin: '2rem 0' }}>
        <SetIndex length={sequence.sequence.length} onClick={onClick} />
      </Col>
    </Row >
  );
}