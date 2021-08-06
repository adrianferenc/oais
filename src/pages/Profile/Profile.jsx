import { Link } from "react-router-dom";
import { checkToken } from '../../utilities/users-service';
import { searchResult } from '../../utilities/sequences-api';
import DeleteFavoriteButton from '../../components/DeleteFavoriteButton/DeleteFavoriteButton'
import RenameFavoriteButton from "../../components/RenameFavoriteButton/RenameFavoriteButton";
import './Profile.css'

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
    <div className="profile">
      <h1>Welcome {`${(user && user.name)[0].toUpperCase()}${(user && user.name).slice(1)}`}</h1>
      <h3>Favorite Sequences:</h3>
      <div className="favorites-list">
        {user.favorites.map((sequence, idx) => {
          return (
            <div className='favorite' key={idx}>
              <Link to="/#" onClick={() => getSequence(sequence.sequenceId)}> {sequence.options.sequenceName}</Link>
              <div className='favorite-buttons'>
                <RenameFavoriteButton user = {user} sequence={sequence} setUser={setUser} />
                <div className='spacer' />
                <DeleteFavoriteButton sequenceId={sequence.sequenceId} setUser={setUser} />
              </div>
            </div>
          )
        })
        }
      </div>

      <button className="check-login" onClick={handleCheckToken}>Check When My Login Expires</button>      
    </div>
  );
}