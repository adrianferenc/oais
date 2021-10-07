import { changeFavorite } from '../../utilities/users-service';
import { Button } from "react-bootstrap";
// import './DeleteFavoriteButton.css'

export default function DeleteFavoriteButton({ sequenceId, setUser }) {

  async function handleDeleteFavorite(evt) {
    evt.preventDefault();
    const updatedUser = await changeFavorite(sequenceId, "delete");
    setUser(updatedUser);
  }

  return (
        <Button variant="danger" onClick={handleDeleteFavorite} size="sm">Remove Sequence from Favorites</Button>
  );
}
