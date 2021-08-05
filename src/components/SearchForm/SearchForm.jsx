import { useState } from 'react';
import { useHistory } from 'react-router';
import { searchResult } from '../../utilities/sequences-api';

export default function SearchForm({ sequence, setSequence }) {
  const [query, setQuery] = useState('');
  let history = useHistory();

  function handleChange(evt) {
    setQuery(evt.target.value);
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    const search = await searchResult(query.padStart(6, "0"));
    setSequence({ sequenceId: query, sequence: search });
    history.push('/')
  }

  return (
    <>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="search" value={query} placeholder="Try 45" onChange={handleChange} required />
          <button disabled={query === ''} type="submit">SEARCH</button>
        </form>

      </div>
    </>
  );
}