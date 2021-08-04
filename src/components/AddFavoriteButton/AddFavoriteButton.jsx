import { useState } from "react";
import { changeFavorite } from '../../utilities/users-service';
import './AddFavoriteButton.css'

export default function AddFavoriteButton({ sequence, user, setUser }) {
  const [userUpdated, setUserUpdated] = useState(false);

  async function handleAddFavorite(evt) {
    evt.preventDefault();
    const updatedUser = await changeFavorite(sequence.sequenceId, "add");
    setUser(updatedUser);
    setUserUpdated(true);
  }

  console.log(userUpdated)
  return (
    <div className="add-favorite-button">
      <form onSubmit={handleAddFavorite} >
        <button type="submit" >Add Sequence to Favorites</button>
      </form>
      <p>{userUpdated && `Sequence added to favorites`}</p>
    </div>
  );
}
