import { checkToken } from '../../utilities/users-service';
import DeleteFavoriteButton from '../../components/DeleteFavoriteButton/DeleteFavoriteButton'

export default function Profile({ user, setUser }) {
  async function handleCheckToken() {
    const dateExp = await checkToken()
    console.log(dateExp);
  }

  return (
    <main className="Profile">
      <h1>Profile</h1>
      <h3>Welcome {user.name}</h3>
      <div className="favorites">
        <h4>Favorite Sequences:</h4>
        <ul>
          {user.favorites.map((sequence, idx) => {
            return (
              <li key={idx}>{sequence} <DeleteFavoriteButton sequence={sequence} user={user} setUser = {setUser}/> </li>
            )
          })
          }
        </ul>
      </div>
      <div>{ }</div>
      <button color="primary" onClick={handleCheckToken}>Check When My Login Expires</button>
    </main>
  );
}