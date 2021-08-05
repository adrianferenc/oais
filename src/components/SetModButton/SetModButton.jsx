import { useState } from 'react';
import './SetModButton.css'

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
    <div className='mod-form'>
      <form className = 'mod-set-block' onSubmit={handleMod}>
        <input type="number" name='modulus' className='modulus-textbox' placeholder={modulus} value={newMod} onChange={handleChange} required />
        <button className='set-change' disabled={newMod === modulus || sequence.sequenceId === '' || newMod <= 1 || newMod % 1 !== 0} type="submit">{modulus === null ? `Set` : `Change`} {type} Mod</button>
      </form>
      <button className='remove' disabled={!modulus} onClick={removeMod}>Remove Mod</button>
    </div>
  );
}
