import { useState } from 'react';
import { searchResult } from '../../utilities/sequences-api';

export default function SearchForm({sequence, setSequence, viewStart, setViewStart}) {
  const [query, setQuery] = useState('');
  
  function handleChange(evt) {
    setQuery(evt.target.value);
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    const search = await searchResult(query.padStart(6, "0"));
    setSequence(search);
  }

  async function handleViewSubmit(evt, pm) {
    evt.preventDefault();
    if (pm === "reset") {
      setViewStart(0);
    } else {
      const change = pm === "+" ? 10 : -10;
      setViewStart(viewStart + change > 0 ? viewStart + change:  0);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={(evt) => handleViewSubmit(evt, "+")} >
          <button type="submit" >+</button>
        </form>
        <form onSubmit={(evt) => handleViewSubmit(evt, "-")}>
          <button type="submit">-</button>
        </form>
        <form onSubmit={(evt) => handleViewSubmit(evt, "reset")}>
          <button type="submit">Reset</button>
        </form>
      </div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="search" value={query} placeholder="Try 45" onChange={handleChange} required />
          <button type="submit">SEARCH</button>
        </form>
        
      </div>
    </>
  );
}