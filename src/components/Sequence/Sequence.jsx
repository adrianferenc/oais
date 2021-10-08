// import './Sequence.css';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';
import { Container, Row, Col } from "react-bootstrap";

export default function Sequence({ user, setUser, showIndex, sequence, width, inColor, numberModulus, colorModulus, showSequence, showTriangle, sequenceRef, triangleRef }) {

  return (
    <Container className='text-center'>
      <Row>
        <Col xs={2.5} className="d-flex justify-content-start">
          <Container >{!!sequence.sequenceId && `Sequence A${sequence.sequenceId.padStart(6, '0')}`}</Container>
        </Col>

        <Col className="d-flex justify-content-center">
          <h5 as={Col} className="display-5" > {sequence.description} </h5>
        </Col>
      </Row>
      <h6 className="display-6" > Visit the sequence at the  <a target="_blank" rel="noopener noreferrer" href={`https://www.oeis.org/A${sequence.sequenceId.padStart(6, '0')}`}>Online Encyclopedia of Integer Sequences</a></h6>

      {(showSequence && sequence.sequenceId) && <div className='sequence-view' ref={sequenceRef}> <SequenceView showIndex={showIndex} numberModulus={numberModulus} colorModulus={colorModulus} sequence={sequence} width={width} inColor={inColor} /></div>}

      {(showTriangle && sequence.sequenceId) && <TriangleView sequence={sequence} numberModulus={numberModulus} colorModulus={colorModulus} width={width} inColor={inColor} triangleRef={triangleRef}/>}
    </Container>
  );
}

