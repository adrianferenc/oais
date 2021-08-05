import './Sequence.css';
import AddFavoriteButton from '../../components/AddFavoriteButton/AddFavoriteButton';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';
export default function Sequence({ user, setUser, showIndex, viewStart, setViewStart, sequence, width, inColor, numberModulus, colorModulus, showSequence, showTriangle }) {



  return (
    <>
      <h1>{!!sequence.sequenceId && `Sequence ${sequence.sequenceId}`}</h1>
      {(user && sequence.sequenceId) && <AddFavoriteButton sequence={sequence} user={user} setUser={setUser} />}

      {(showSequence && sequence.sequenceId) && <SequenceView showIndex={showIndex} numberModulus={numberModulus} colorModulus={colorModulus} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} inColor={inColor} />}

      {(showTriangle && sequence.sequenceId) && <TriangleView sequence={sequence} numberModulus={numberModulus} colorModulus={colorModulus} width={width} inColor={inColor} />}
    </>
  );
}