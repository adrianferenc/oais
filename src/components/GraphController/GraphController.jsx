import { useState, useEffect } from 'react';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

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
        <ButtonGroup size="sm" className="controller-buttons">
            <Button value='scatter' onClick={inter}>Scatter</Button>
            <Button value='log' onClick={inter}>Log</Button>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip" >
                    Histogram may take a while to load
                </Tooltip>}
            >
                <Button className="histogram-button" value='histogram' onClick={inter}>Histogram</Button>
            </OverlayTrigger>
            <Button variant="danger" onClick={() => setShowGraph(false)}>Hide Graph</Button>
        </ButtonGroup>
    )

}