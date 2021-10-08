import Sequence from '../../components/Sequence/Sequence'
import './SequencePage.css';
import GraphView from '../../components/GraphView/GraphView';

export default function SequencePage({ sequence, user, setUser, showIndex, width, inColor, numberModulus, colorModulus, showSequence, showTriangle, showGraph, setShowGraph, graphSize }) {

  return (
    <div className="SequencePage">
      <div className='sequence'>
        <Sequence user={user} setUser={setUser} showIndex={showIndex} showSequence={showSequence} showTriangle={showTriangle} sequence={sequence} width={width} inColor={inColor} numberModulus={numberModulus} colorModulus={colorModulus} />
      </div>
      <GraphView showGraph={showGraph} setShowGraph={setShowGraph} sequence={sequence} graphSize={graphSize} />
    </div>
  );
}