import { useState } from 'react';
import Graph from '../Graph/Graph'
import GraphBoundaryButton from '../GraphBoundaryButton/GraphBoundaryButton';

export default function GraphView({ sequence }) {
    const [graphStart, setGraphStart] = useState(0);
    const [graphEnd, setGraphEnd] = useState(10);
    const [data, setData] = useState([
        {
            x: xAxis(),
            y: sequence.sequence.slice(graphStart, graphEnd),
            type: 'scatter',
        },
    ]);
    console.log(data);
    function xAxis() {
        const output = [];
        for (let i = graphStart; i < graphEnd; i++) {
            output.push(i);
        }
        return output;
    }

    function handleGraphChange(evt) {
        if (evt.target.value === 'scatter') {
            setData([
                {
                    x: xAxis(),
                    y: sequence.sequence.slice(graphStart, graphEnd),
                    type: 'scatter',
                },
            ]);
        } else if (evt.target.value === 'log') {
            setData([
                {
                    x: xAxis(),
                    y: sequence.sequence.slice(graphStart, graphEnd).map(x => Math.log(x)).slice(graphStart, graphEnd),
                    type: 'scatter',
                },
            ]);
        } else if (evt.target.value === 'histogram') {
            setData([{
                x: sequence.sequence.slice(graphStart, graphEnd),
                xbins: { size: 1 },
                type: 'histogram',
            }]);
        }
    }

    return (
        <>
            <button value='scatter' onClick={handleGraphChange}>Scatter</button>
            <button value='log' onClick={handleGraphChange}>Log</button>
            <button value='histogram' onClick={handleGraphChange}>Histogram</button>
            <Graph data={data} />
            <GraphBoundaryButton data={data} setData={setData} graphStart={graphStart} graphEnd={graphEnd} boundarySetter={setGraphStart} boundary={'Start'} />

            <GraphBoundaryButton data={data} setData={setData} graphStart={graphStart} graphEnd={graphEnd} boundarySetter={setGraphEnd} boundary={'End'} />
        </>
    )
}