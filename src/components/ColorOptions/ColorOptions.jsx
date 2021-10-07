import SetModButton from '../SetModButton/SetModButton';
import { Button, ButtonGroup, InputGroup, Card, Row } from "react-bootstrap";

export default function ColorOptions({ sequence, inColor, setInColor, colorModulus, setColorModulus }) {

    return (
        <Card className="text-center">
            <Card.Header>Color Options</Card.Header>
            <Card.Body>
                <InputGroup>
                    <Row className="d-flex justify-content-center">
                        <ButtonGroup size="sm">
                            <Button onClick={() => setInColor(!inColor)} > Switch to {inColor ? `Grayscale` : `Color`}</Button>
                        </ButtonGroup>
                        <SetModButton sequence={sequence} modulus={colorModulus} setModulus={setColorModulus} type={'Color'} />
                    </Row>
                </InputGroup>
            </Card.Body>
        </Card>
    );
}