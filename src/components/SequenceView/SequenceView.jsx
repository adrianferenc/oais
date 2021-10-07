import SetIndex from '../SetIndex/SetIndex'
import colorizer from '../../utilities/color'
import grayizer from '../../utilities/gray'
import './SequenceView.css';
import { useEffect, useState, createRef } from 'react';
import { Container } from "react-bootstrap";

export default function SequenceView({ showIndex, numberModulus, colorModulus, viewStart, setViewStart, sequence, width, inColor }) {
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
    <Container className="sequence-view">
      <Container className='d-flex justify-content-start' id='sequence' style={{ 'overflowX': 'auto' }}>
        {sequence.sequence.map((x, idx) => {
          let color = inColor ? colorizer(sequence.sequence, x, idx, colorModulus) : grayizer(sequence.sequence, x, idx, colorModulus);
          return (
            <div ref={elRefs[idx]} className="integer" style={{ width: `${width}px` }} key={idx}>
              <div style={{ backgroundColor: color }} className="chevron" value={+x} key={idx}>
                <p className="number">{numberModulus === null ? x : (+x % numberModulus)}</p>
              </div>
              <div id="index-view">{showIndex && idx}</div>
            </div>
          )
        })}
      </Container>
      <Container className="d-flex justify-content-center">
        <SetIndex viewStart={viewStart} onClick={onClick} />
      </Container>
    </Container >
  );
}