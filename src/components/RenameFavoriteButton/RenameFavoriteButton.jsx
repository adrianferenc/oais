import { useState } from 'react';
import { changeFavorite } from '../../utilities/users-service';
import './RenameFavoriteButton.css'

export default function RenameFavoriteButton({ sequence, setUser }) {
  const [clicked, setClicked] = useState(false)
  const [newName, setNewName] = useState('');

  function handleChange(evt) {
    setNewName(evt.target.value);
  }

  function handeRenameButton(evt) {
    setClicked(true);
    setNewName(sequence.sequenceName);
  }

  async function handleRename(evt) {
    evt.preventDefault();
    console.log(newName)
    const updatedUser = await changeFavorite(sequence.sequenceId, "add", { sequenceName: newName });
    console.log(updatedUser)
    setClicked(false);
    setNewName('');
    setUser(updatedUser);
  }

  return (
    <>
      {clicked ?
        <form onSubmit={handleRename}>
          <input type="text" name='renameValue' placeholder={sequence.sequenceName} value={newName} onChange={handleChange} required />
          <button type="submit">Change name</button>
          <button onClick={() => setClicked(false)}>Cancel</button>
        </form> : <button onClick={handeRenameButton}>Rename Sequence</button>
      }</>
  );
}
