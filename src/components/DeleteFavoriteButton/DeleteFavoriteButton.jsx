import { changeFavorite } from '../../utilities/users-service';

export default function DeleteFavoriteButton({ sequence, setUser }) {

  async function handleDeleteFavorite(evt) {
    evt.preventDefault();
    const updatedUser = await changeFavorite(sequence, "delete");
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
