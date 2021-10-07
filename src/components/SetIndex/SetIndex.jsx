import { useState } from 'react';
import { Button, InputGroup, FormControl, Col, Container } from "react-bootstrap";
// import './SetModButton.css'

export default function SetIndex({ onClick, viewStart }) {
    const [index, setIndex] = useState(0);

    function handleChange(evt) {
        setIndex(evt.target.value);
    }

    return (
        <Container>
            <InputGroup >
                <Col xs={2}>
                    <FormControl
                        onChange={handleChange} required
                    />
                </Col>
                <Button size="sm" onClick={() => onClick(index)} >Go to Index</Button>
            </InputGroup>
        </Container>
    );
}
