import { useState } from 'react';
import { Button, ButtonGroup, InputGroup, FormControl, Col } from "react-bootstrap";
// import './SetModButton.css'

export default function SetModButton({ modulus, setModulus, sequence, type }) {
  const [newMod, setNewMod] = useState('');

  function handleChange(evt) {
    setNewMod(evt.target.value);
  }

  async function handleMod(evt) {
    evt.preventDefault();
    setModulus(newMod);
    setNewMod('');
  }

  async function removeMod(evt) {
    evt.preventDefault();
    setNewMod('');
    setModulus(null);
  }

  return (
    <InputGroup>
      <Col xs={1}>
        <FormControl
          placeholder={modulus}
          value={newMod}
          onChange={handleChange} required
          aria-label="Recipient's username with two button addons"
        />
      </Col>
      <ButtonGroup size="sm">
        <Button disabled={newMod === modulus || sequence.sequenceId === '' || newMod <= 1 || newMod % 1 !== 0} onClick={handleMod} variant="secondary">{modulus === null ? `Set` : `Change`} {type} Mod</Button>
        <Button disabled={!modulus} onClick={removeMod} variant="secondary">Remove Mod</Button>
      </ButtonGroup>

    </InputGroup>
  );
}
