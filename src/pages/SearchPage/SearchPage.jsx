import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useState } from 'react';

export default function SearchPage(props) {
    const [results, setResults] = useState('');
    return (
        <>
            <SearchForm setResults={setResults}/>
            <SearchResults results = {results}/>
        </>
    )
}
