import { useState, useCallback } from 'react';
import Graph from '../Graph/Graph'
import GraphController from '../GraphController/GraphController';
import GraphBoundaryButton from '../GraphBoundaryButton/GraphBoundaryButton';
import './GraphView.css'

export default function GraphView({ showGraph, setShowGraph, sequence }) {
    const [graphStart, setGraphStart] = useState(0);
    const [graphEnd, setGraphEnd] = useState(10);
    const [type, setType] = useState('');
    const [data, setData] = useState([
        {
            x: xAxis(),
            y: sequence.sequence.slice(graphStart, graphEnd),
            type: 'scatter',
            name: 'Scatterplot'
        },
    ]);

    function xAxis() {
        const output = [];
        for (let i = graphStart; i <= graphEnd + 1; i++) {
            output.push(i);
        }
        return output;
    }

    function dataFormatter(type) {
        if (type === 'scatter') {
            return [
                {
                    x: xAxis(),
                    y: sequence.sequence.slice(graphStart, graphEnd + 1),
                    type: 'scatter',
                    name: 'Scatter Plot'
                },
            ];
        } else if (type === 'log') {
            return [
                {
                    x: xAxis(),
                    y: sequence.sequence.slice(graphStart, graphEnd + 1).map(x => Math.log(x)),
                    type: 'scatter',
                    name: 'Logarithmic Plot'
                },
            ];
        } else if (type === 'histogram') {
            // if (Math.max(...sequence.sequence.slice(graphStart, graphEnd + 1)) - Math.min(...sequence.sequence.slice(graphStart, graphEnd + 1)) < 100000) {
                return [{
                    x: sequence.sequence.slice(graphStart, graphEnd),
                    xbins: { size: 1 },
                    type: 'histogram',
                    name: 'Histogram'
                }];
            // }
        }
    }

    const memoizedHandleGraphChange = useCallback(
        (evt) => handleGraphChange(evt)
    );

    function handleGraphChange(evt) {
        setType(evt.target.value);
        setShowGraph(true);
        setData(dataFormatter(type));
    }

    return (
        showGraph && <div>
            <div className="graph-view">
                <div>
                    <div className='graph-controller'>
                        <GraphController memoizedHandleGraphChange={memoizedHandleGraphChange} handleGraphChange={handleGraphChange} setShowGraph={setShowGraph} />
                    </div>
                    <div className="graph">
                    <Graph data={data} />
                    </div>
                    <div className='boundary-button-group'>
                        <div className='boundary-button'>
                            <GraphBoundaryButton type={type} dataFormatter={dataFormatter} data={data} setData={setData} graphStart={graphStart} graphEnd={graphEnd} boundarySetter={setGraphStart} boundary={'Start'} />
                        </div>
                        <div className='boundary-button'>
                            <GraphBoundaryButton type={type} dataFormatter={dataFormatter} data={data} setData={setData} graphStart={graphStart} graphEnd={graphEnd} boundarySetter={setGraphEnd} boundary={'End'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}