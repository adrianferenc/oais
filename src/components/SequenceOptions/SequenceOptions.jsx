import SetModButton from '../SetModButton/SetModButton';
import { Button, ButtonGroup, InputGroup, Card, Row } from "react-bootstrap";

export default function SequenceOptions({ sequence, showSequence, setShowSequence, showIndex, setShowIndex, showTriangle, setShowTriangle, numberModulus, setNumberModulus, setColorModulus }) {

    return (
        <Card className="text-center d-flex justify-content-start">
            <Card.Header>Sequence Options</Card.Header>
            <Card.Body>
                <InputGroup>
                    <Row className="d-flex justify-content-center">
                        <ButtonGroup size="sm">
                            <Button onClick={() => setShowSequence(!showSequence)}>{showSequence ? `Hide` : `Show`} Sequence</Button>
                            <Button onClick={() => { setShowIndex(!showIndex) }}>{showIndex ? `Hide` : `Show`} Index</Button>
                            <Button onClick={() => setShowTriangle(!showTriangle)}>{showTriangle ? `Hide` : `Show`} Triangle</Button>
                        </ButtonGroup>
                    
                        <SetModButton sequence={sequence} modulus={numberModulus} setModulus={(x) => { setNumberModulus(x); setColorModulus(x) }} type={'Number'} />
                    </Row>
                </InputGroup>
            </Card.Body>
        </Card>
    );
}