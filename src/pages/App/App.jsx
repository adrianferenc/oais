import "./App.css";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service'
import AuthPage from "../AuthPage/AuthPage";
import SequencePage from "../SequencePage/SequencePage"
import Profile from "../Profile/Profile";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  const [auth, setAuth] = useState(true);

  const [sequence, setSequence] = useState({
    sequenceId: '',
    sequence: [],
    options: {
      viewStart: 0,
      width: 100
    },
  });

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <main className="main-page">
        <Switch>
          <Route exact path="/">
            <SequencePage sequence={sequence} setSequence={setSequence} user={user} setUser={setUser} />
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
      </main>
    </main >
  );
}
