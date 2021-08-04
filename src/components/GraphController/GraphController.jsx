import { useState, useEffect } from 'react';

export default function GraphController({ memoizedHandleGraphChange, handleGraphChange, setShowGraph }) {
    const [graphType, setGraphType] = useState(null);

    function inter(evt) {
        setGraphType(evt);
        memoizedHandleGraphChange(evt);
    }

    useEffect(() => {
        graphType && memoizedHandleGraphChange(graphType);
    }, 
    [graphType]
    )

    return (
        <>
            <button value='scatter' onClick={inter}>Scatter</button>
            <button value='log' onClick={inter}>Log</button>
            <button value='histogram' onClick={inter}>Histogram</button>
            <button onClick={() => setShowGraph(false)}>Hide Graph</button>
        </>
    )

}