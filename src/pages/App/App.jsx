import "./App.css";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service'
import AuthPage from "../AuthPage/AuthPage";
import IndexPage from "../IndexPage/IndexPage"
import Profile from "../Profile/Profile";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  const [auth, setAuth] = useState(true);


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </>
        : (
          <>
            <button onClick={() => setAuth(!auth)}> {auth ? 'Login' : 'Sign Up'} </button>
            <AuthPage setUser={setUser} auth={auth} />
          </>
        )}
    </main>
  );
}
