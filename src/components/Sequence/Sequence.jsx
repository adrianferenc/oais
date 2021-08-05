import './Sequence.css';
import AddFavoriteButton from '../../components/AddFavoriteButton/AddFavoriteButton';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';
export default function Sequence({ user, setUser, showIndex, viewStart, setViewStart, sequence, width, inColor, numberModulus, colorModulus, showSequence, showTriangle }) {



  return (
    <div className='sequence'>
      <h1 className = 'oais-color'>{!!sequence.sequenceId && `Sequence ${sequence.sequenceId}`}</h1>
      {(user && sequence.sequenceId) && <AddFavoriteButton sequence={sequence} user={user} setUser={setUser} />}

      {(showSequence && sequence.sequenceId) && <div className = 'sequence-view'><SequenceView showIndex={showIndex} numberModulus={numberModulus} colorModulus={colorModulus} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} inColor={inColor} /></div>}

      {(showTriangle && sequence.sequenceId) && <TriangleView sequence={sequence} numberModulus={numberModulus} colorModulus={colorModulus} width={width} inColor={inColor} />}
    </div>
  );
}