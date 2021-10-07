import { useState, useCallback } from 'react';
import Graph from '../Graph/Graph'
import GraphController from '../GraphController/GraphController';
import GraphBoundaryButton from '../GraphBoundaryButton/GraphBoundaryButton';
import { Container, Row, Col } from "react-bootstrap";
// import './GraphView.css'

export default function GraphView({ showGraph, setShowGraph, sequence, graphSize }) {
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
            return [{
                x: sequence.sequence.slice(graphStart, graphEnd),
                xbins: { size: 1 },
                type: 'histogram',
                name: 'Histogram'
            }];
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
        showGraph &&
        <Container className='text-center'>
            <Container className='graph-controller'>
                <GraphController memoizedHandleGraphChange={memoizedHandleGraphChange} handleGraphChange={handleGraphChange} setShowGraph={setShowGraph} />
            </Container>
            <Container className="graph">
                <Graph data={data} graphSize={graphSize} />
            </Container>
            <Row>
                <Col>
                    <GraphBoundaryButton type={type} dataFormatter={dataFormatter} data={data} setData={setData} graphStart={graphStart} graphEnd={graphEnd} boundarySetter={setGraphStart} boundary={'Start'} />
                </Col>
                <Col>
                    <GraphBoundaryButton type={type} dataFormatter={dataFormatter} data={data} setData={setData} graphStart={graphStart} graphEnd={graphEnd} setGraphEnd={setGraphEnd} boundarySetter={setGraphEnd} boundary={'End'} />
                </Col>
            </Row>
        </Container>
    )
}