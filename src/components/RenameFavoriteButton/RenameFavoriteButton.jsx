import { useState } from 'react';
import { changeFavorite } from '../../utilities/users-service';
import { Button, InputGroup, FormControl, ButtonGroup } from "react-bootstrap";
// import './RenameFavoriteButton.css'

export default function RenameFavoriteButton({ sequence, setUser }) {
  const [clicked, setClicked] = useState(false)
  const [newName, setNewName] = useState('');

  function handleChange(evt) {
    setNewName(evt.target.value);
  }

  function handeRenameButton(evt) {
    setClicked(true);
    setNewName(sequence.options.sequenceName);
  }

  async function handleRename(evt) {
    evt.preventDefault();
    const updatedUser = await changeFavorite(sequence.sequenceId, "add", { sequenceName: newName });
    setClicked(false);
    setNewName('');
    setUser(updatedUser);
  }

  return (
    <>
      {clicked ?
        <InputGroup >
          <FormControl
            placeholder={sequence.options.sequenceName}
            value={newName}
            onChange={handleChange} required
            name='renameValue'
          />
          <ButtonGroup size="sm">
            <Button onClick={handleRename}>Change name</Button>
            <Button onClick={() => setClicked(false)}>Cancel</Button>
          </ButtonGroup>
        </InputGroup> : <Button size="sm" onClick={handeRenameButton}>Rename Sequence</Button>
      }</>
  );
}
