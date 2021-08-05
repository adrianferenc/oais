import "./App.css";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service'
import AuthPage from "../AuthPage/AuthPage";
import SequencePage from "../SequencePage/SequencePage"
import Profile from "../Profile/Profile";
import Toolbar from "../../components/Toolbar/Toolbar";

export default function App() {
  const [user, setUser] = useState(getUser());

  const [auth, setAuth] = useState(true);

  const [width, setWidth] = useState(60);

  const [inColor, setInColor] = useState(true);

  const [colorModulus, setColorModulus] = useState(null);

  const [showGraph, setShowGraph] = useState(false);

  const [showIndex, setShowIndex] = useState(false);

  const [sequence, setSequence] = useState({
    sequenceId: '',
    sequence: [],
    options: {
      viewStart: 0,
      width: width
    },
  });

  return (
    <div>
      <Toolbar user={user} setUser={setUser} sequence={sequence} setSequence={setSequence} width = {width} setWidth = {setWidth}inColor = {inColor} setInColor = {setInColor} colorModulus={colorModulus} setColorModulus={setColorModulus} showIndex ={showIndex} setShowIndex = {setShowIndex} showGraph = {showGraph} setShowGraph={setShowGraph}/>
      <div className="main-page">
        <Switch>
          <Route exact path="/">
            <SequencePage sequence={sequence} setSequence={setSequence} user={user} setUser={setUser} width = {width} inColor={inColor} colorModulus={colorModulus} showGraph = {showGraph} setShowGraph={setShowGraph} showIndex = {showIndex}/>
          </Route>

          <Route exact path="/profile">
            <Profile user={user} setUser={setUser} setSequence={setSequence} />
          </Route>

          <Route exact path="/signup">
            <AuthPage setUser={setUser} auth={auth} setAuth={setAuth} />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
