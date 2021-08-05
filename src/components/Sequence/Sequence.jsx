import './Sequence.css';
import AddFavoriteButton from '../../components/AddFavoriteButton/AddFavoriteButton';
import SequenceView from '../SequenceView/SequenceView';
import TriangleView from '../TriangleView/TriangleView';
export default function Sequence({ user, setUser, showIndex, viewStart, setViewStart, sequence, width, inColor, colorModulus }) {



  return (
    <>
      <h1>{!!sequence.sequenceId && `Sequence ${sequence.sequenceId}`}</h1>
      {user && <AddFavoriteButton sequence={sequence} user={user} setUser={setUser} />}


      <SequenceView showIndex = {showIndex} colorModulus={colorModulus} viewStart={viewStart} setViewStart={setViewStart} sequence={sequence} width={width} inColor={inColor} />

      <TriangleView sequence={sequence} colorModulus={colorModulus} width={width} inColor={inColor} />
    </>
  );
}