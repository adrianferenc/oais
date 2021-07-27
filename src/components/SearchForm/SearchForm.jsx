import { useState } from 'react';
import {getSequence} from '../../utilities/users-api'

export default function SearchPage({setResults}) {
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');

    function handleChange(evt) {
        setSearch(evt.target.value);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const searchResults = await getSequence(search);
            setResults(searchResults);
        } catch {
            setError('Search Failed');
        }
    }


    return (
        <div>
            <div className="form-container" onSubmit={handleSubmit}>
                <form autoComplete="off" >
                    <input type="text" name="search" placeholder="Enter the ID for a sequence" value={search} onChange={handleChange} required />
                    <button type="submit">Search</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}