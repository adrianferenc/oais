import { useState } from 'react';
import { changeFavorite } from '../../utilities/users-service';

export default function RenameFavoriteButton({sequenceId, setUser }) {
  const [clicked,setClicked] = useState(false)
  const [newName, setNewName] = useState('');

  function handleChange(evt) {
    setNewName(evt.target.value);
  }

  async function handleRename(evt) {
    evt.preventDefault();
    console.log(newName);
    const updatedUser = await changeFavorite(sequenceId, "add", {sequenceName: newName});
    setClicked(false);
    setNewName('');
    setUser(updatedUser);
  }

  return (
    <>
      {clicked ? 
        <form onSubmit={handleRename}>
          <input type="text" name='renameValue' value={newName} onChange={handleChange} required />
          <button type="submit">Change name</button>
        </form> : <button onClick={() => setClicked(true)}>Rename Sequence</button>
      }</>
  );
}
