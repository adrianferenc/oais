import { changeFavorite } from '../../utilities/users-service';
import { Button } from "react-bootstrap";
// import './AddFavoriteButton.css'

export default function AddFavoriteButton({ sequence, user, setUser }) {
  async function handleAddFavorite(evt) {
    evt.preventDefault();
    const updatedUser = await changeFavorite(sequence.sequenceId, "add");
    setUser(updatedUser);
  }

  return (
    <Button size="sm" disabled={user.favorites.map(sequence => sequence.sequenceId).includes(sequence.sequenceId)} onClick={handleAddFavorite} >{user.favorites.map(sequence => sequence.sequenceId).includes(sequence.sequenceId) ? 'Sequence Already Added To Favorites' : 'Add Sequence to Favorites'}</Button>
  );
}
