// import './GraphBoundaryButton.css'
import { Button, ButtonGroup, Form, Row } from "react-bootstrap";


export default function GraphBoundaryButton({ type, dataFormatter, setData, graphStart, graphEnd, boundarySetter, boundary }) {
    const newBoundary = boundary === 'Start' ? graphStart : graphEnd;

    function handleChange(evt) {
        if (evt.target.value === 'minus' && (boundary === 'Start' || graphEnd > graphStart + 1)) {
            boundarySetter(newBoundary > 0 ? newBoundary - 1 : newBoundary)
        } else if (evt.target.value === 'plus' && (boundary === 'End' || graphStart < graphEnd - 1)) {
            boundarySetter(newBoundary + 1);
        }
        setData(dataFormatter(type));
    }

    return (

        <Form>
            <Form.Group>
                <Row>
                    <ButtonGroup size="sm">
                        <Button className="change-button" value="minus" onClick={handleChange}>-</Button>
                        <div className='boundary-value'>{newBoundary}</div>
                        <Button className="change-button" value="plus" onClick={handleChange}>+</Button>
                    </ButtonGroup>
                </Row>
                <Row>
                    <Form.Label>Graph {boundary === 'Start' ? `Starting` : 'Ending'} Point</Form.Label>
                </Row>
            </Form.Group>
        </Form>
    )
}