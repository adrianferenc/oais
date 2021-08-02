import { Link, useHistory } from "react-router-dom";
import { checkToken } from '../../utilities/users-service';
import { searchResult } from '../../utilities/sequences-api';
import DeleteFavoriteButton from '../../components/DeleteFavoriteButton/DeleteFavoriteButton'
import RenameFavoriteButton from "../../components/RenameFavoriteButton copy/RenameFavoriteButton";

export default function Profile({ user, setUser, setSequence }) {
  const history = useHistory();

  async function handleCheckToken() {
    const dateExp = await checkToken()
    console.log(dateExp);
  }

  async function getSequence(query) {
    const search = await searchResult(query.padStart(6, "0"));
    setSequence({ sequenceId: query, sequence: search })
    reroute();
  }

  function reroute() {
    history.push("/")
  }

  return (
    <main className="Profile">
      <h1>Profile</h1>
      <h3>Welcome {user.name}</h3>
      <h4>Favorite Sequences:</h4>
      <div className="favorites">
          {user.favorites.map((sequence, idx) => {
            return (
              <div key={idx}>
                <Link to="/#" onClick={() => getSequence(sequence.sequenceId)}> {sequence.sequenceName}</Link>
                <DeleteFavoriteButton sequenceId={sequence.sequenceId} setUser={setUser} />
                <RenameFavoriteButton sequenceId={sequence.sequenceId} setUser={setUser} />
              </div>
            )
          })
          }
      </div>
      <div>{ }</div>
      <button color="primary" onClick={handleCheckToken}>Check When My Login Expires</button>
    </main>
  );
}