import { changeFavorite } from '../../utilities/users-service';
import './DeleteFavoriteButton.css'

export default function DeleteFavoriteButton({ sequenceId, setUser }) {

  async function handleDeleteFavorite(evt) {
    evt.preventDefault();
    const updatedUser = await changeFavorite(sequenceId, "delete");
    setUser(updatedUser);
  }

  return (
    <div className="delete-favorite-button">
      <form onSubmit={handleDeleteFavorite} >
        <button type="submit" >Remove Sequence from Favorites</button>
      </form>
    </div>
  );
}
