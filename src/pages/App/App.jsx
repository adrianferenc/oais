import "./App.css";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service'
import AuthPage from "../AuthPage/AuthPage";
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import PuppyHistoryPage from "../PuppyHistoryPage/PuppyHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import SearchPage from "../SearchPage/SearchPage";


export default function App() {
  const [user, setUser] = useState(getUser());

  const [auth, setAuth] = useState(true);


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/puppies/new">
              <NewPuppyPage />
            </Route>

            <Route path="/search">
              <SearchPage />
            </Route>

            <Route path="/puppies">
              <PuppyHistoryPage />
            </Route>

            <Route>
              <Redirect to="/puppies" />
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
