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
    const search = await searchResult(query.replace(/[a-zA-Z]*/g,'').padStart(6, "0"));
    setSequence({ sequenceId: query.replace(/[a-zA-Z]*/g,''), sequence: search, options:{sequenceName:`{A${query.padStart(6, "0")}}`}});
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