import { useState } from 'react';
import './SetModButton.css'

export default function SetModButton({ modulus, setModulus, sequence }) {
  const [newMod, setNewMod] = useState('');

  function handleChange(evt) {
    setNewMod(evt.target.value);
  }

  async function handleMod(evt) {
    evt.preventDefault();
    setModulus(newMod);
  }

  async function removeMod(evt) {
    evt.preventDefault();
    setNewMod('');
    setModulus(null);
  }

  return (
    <>
      <form onSubmit={handleMod}>
        <input type="number" name='modulus' placeholder={modulus} value={newMod} onChange={handleChange} required />
        <button disabled={newMod === modulus || sequence.sequenceId === '' || newMod <= 1 || newMod % 1 !== 0} type="submit">Change Modulus</button>
      </form>
      <form onSubmit={removeMod}>
        <button disabled={!modulus} type="submit">Remove Modulus</button>
      </form>
    </>
  );
}
