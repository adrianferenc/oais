import { useState, useEffect } from 'react';
import './GraphController.css'

export default function GraphController({ memoizedHandleGraphChange, setShowGraph }) {
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
        <div className = 'controller'>
            <div className="controller-buttons">
                <button value='scatter' onClick={inter}>Scatter</button>
                <button value='log' onClick={inter}>Log</button>
                <button className="histogram-button" value='histogram' onClick={inter}>Histogram</button>
                <button onClick={() => setShowGraph(false)}>Hide Graph</button>
            </div>
            <div className = 'histogram-note'>Note: Histogram may take a long time to load</div>
        </div>
    )

}