import { useState } from 'react';
import { searchResult } from '../../utilities/sequences-api';

export default function SearchForm({ sequence, setSequence }) {
  const [query, setQuery] = useState('');

  function handleChange(evt) {
    setQuery(evt.target.value);
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    const search = await searchResult(query.padStart(6, "0"));
    setSequence({sequenceId: query, sequence: search });
  }

  return (
    <>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="search" value={query} placeholder="Try 45" onChange={handleChange} required />
          <button type="submit">SEARCH</button>
        </form>

      </div>
    </>
  );
}