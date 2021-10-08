// import "./App.css";
import { useState } from "react";
import { getUser } from '../../utilities/users-service'
import SequencePage from "../SequencePage/SequencePage"
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  const [width, setWidth] = useState(60);

  const [inColor, setInColor] = useState(true);

  const [colorModulus, setColorModulus] = useState(null);

  const [numberModulus, setNumberModulus] = useState(null);

  const [showSequence, setShowSequence] = useState(true);

  const [showTriangle, setShowTriangle] = useState(false);

  const [showGraph, setShowGraph] = useState(false);

  const [showIndex, setShowIndex] = useState(false);

  const [graphSize, setGraphSize] = useState(0);

  const [sequence, setSequence] = useState({
    sequenceId: '',
    sequence: [],
    description: '',
    options: {
      width: width,
      sequenceName: ''
    },
  });

  return (
    <div className='app'>
      <NavBar user={user} setUser={setUser} sequence={sequence} setSequence={setSequence} width={width} setWidth={setWidth} inColor={inColor} setInColor={setInColor} numberModulus={numberModulus} setNumberModulus={setNumberModulus} colorModulus={colorModulus} setColorModulus={setColorModulus} showIndex={showIndex} setShowIndex={setShowIndex} showSequence={showSequence} setShowSequence={setShowSequence} showTriangle={showTriangle} setShowTriangle={setShowTriangle} showGraph={showGraph} setShowGraph={setShowGraph} graphSize={graphSize} setGraphSize={setGraphSize} />

      <div className="main-page">
        {sequence.sequenceId ? <SequencePage sequence={sequence} setSequence={setSequence} user={user} setUser={setUser} width={width} inColor={inColor} numberModulus={numberModulus} colorModulus={colorModulus} showSequence={showSequence} showTriangle={showTriangle} showGraph={showGraph} setShowGraph={setShowGraph} showIndex={showIndex} graphSize={graphSize} /> : <About user={user} setSequence={setSequence} />}
      </div>
    </div>
  );
}
