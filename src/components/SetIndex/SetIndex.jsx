import { useState } from 'react';
import { Button, InputGroup, FormControl, Col } from "react-bootstrap";
// import './SetModButton.css'

export default function SetIndex({ onClick, length }) {
    const [index, setIndex] = useState(0);

    function handleChange(evt) {
        setIndex(Math.min(evt.target.value, length));
    }

    return (
        <InputGroup className="d-flex justify-content-center">
            <Col xs={2}>
                <FormControl
                    onChange={handleChange} required
                />
            </Col>
            <Button size="sm" disabled={index < 0} onClick={() => onClick(index)} >Go to Index (of {length})</Button>
        </InputGroup>
    );
}
