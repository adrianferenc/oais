import { changeFavorite } from '../../utilities/users-api';

export default function DeleteFavoriteButton({ sequence, user, setUser }) {

  async function handleDeleteFavorite(evt) {
    evt.preventDefault();
    const updatedUser = await changeFavorite(user, sequence, "delete");
    setUser(updatedUser);
  }

  return (
    <div className="delete-favorite-button">
      <form onSubmit={handleDeleteFavorite} >
        <button type="submit" >Delete Sequence from Favorites</button>
      </form>
    </div>
  );
}
