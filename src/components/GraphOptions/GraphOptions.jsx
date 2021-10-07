import { Button, ButtonGroup, Card } from "react-bootstrap";

export default function GraphOptions({ showGraph, setShowGraph, graphSize, setGraphSize }) {

    return (
        <Card className="text-center">
            <Card.Header>Graph Options</Card.Header>
            <Card.Body>
                <ButtonGroup size="sm">
                    <Button onClick={() => setShowGraph(!showGraph)}>{showGraph ? `Hide` : `Show`} Graph</Button>
                </ButtonGroup>
                {/* <ButtonGroup size="sm">
                    <Button onClick={() => { setGraphSize(Math.max(-2, graphSize - 1)) }} >-</Button>
                    <Button onClick={() => setGraphSize(0)}>Reset</Button>
                    <Button onClick={() => { setGraphSize(Math.min(25, graphSize + 1)) }}>+</Button>
                </ButtonGroup> */}
            </Card.Body>
        </Card>
    );
}