import { Link } from "react-router-dom";
import { checkToken } from '../../utilities/users-service';
import { searchResult } from '../../utilities/sequences-api';
import DeleteFavoriteButton from '../../components/DeleteFavoriteButton/DeleteFavoriteButton'
import RenameFavoriteButton from "../../components/RenameFavoriteButton/RenameFavoriteButton";



export default function Profile({ user, setUser, setSequence }) {

  async function handleCheckToken() {
    const dateExp = await checkToken()
    console.log(dateExp);
  }

  async function getSequence(query) {
    const search = await searchResult(query.padStart(6, "0"));
    setSequence({ sequenceId: query, sequence: search, options: { sequenceName: `A${query.padStart(6, "0")}` } })
  }

  return (
    <div className="Profile">
      <h1>Welcome {user.name}</h1>
      <h3>Favorite Sequences:</h3>
      <div className="favorites">
        {user.favorites.map((sequence, idx) => {
          return (
            <div key={idx}>
              <Link to="/#" onClick={() => getSequence(sequence.sequenceId)}> {sequence.sequenceName}</Link>
              <DeleteFavoriteButton sequenceId={sequence.sequenceId} setUser={setUser} />
              <RenameFavoriteButton sequence={sequence} setUser={setUser} />
            </div>
          )
        })
        }
      </div>
      <div>{ }</div>
      <button color="primary" onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}