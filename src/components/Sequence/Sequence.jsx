// import './Sequence.css';
import { Link } from "react-router-dom";
import AddFavoriteButton from '../../components/AddFavoriteButton/AddFavoriteButton';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';
import { Container, Row } from "react-bootstrap";

export default function Sequence({ user, setUser, showIndex, viewStart, setViewStart, sequence, width, inColor, numberModulus, colorModulus, showSequence, showTriangle }) {

  return (
    <Container className='text-center'>
      <Row>
        <h1 className='oais-color'>{!!sequence.sequenceId && `Sequence A${sequence.sequenceId.padStart(6, '0')}`}</h1>
        {(user && sequence.sequenceId) && <AddFavoriteButton sequence={sequence} user={user} setUser={setUser} />}
      </Row>
      <p> Visit the sequence at the  <a target="_blank" and rel="noopener noreferrer" href={`https://www.oeis.org/A${sequence.sequenceId.padStart(6, '0')}`}>Online Encyclopedia of Integer Sequences</a></p>


      {(showSequence && sequence.sequenceId) && <div className='sequence-view'> <SequenceView showIndex={showIndex} numberModulus={numberModulus} colorModulus={colorModulus} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} inColor={inColor} /></div>}

      {(showTriangle && sequence.sequenceId) && <TriangleView sequence={sequence} numberModulus={numberModulus} colorModulus={colorModulus} width={width} inColor={inColor} />}
    </Container>
  );
}

