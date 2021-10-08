import SearchForm from '../../components/SearchForm/SearchForm'
import { useState } from "react";
import { Navbar, Button, Modal, CardGroup, Col, Row } from "react-bootstrap";


import ZoomSettings from '../../components/ZoomSettings/ZoomSettings';
import SequenceOptions from '../../components/SequenceOptions/SequenceOptions'
import ColorOptions from '../ColorOptions/ColorOptions';
import GraphOptions from '../GraphOptions/GraphOptions';


export default function NavBar({ user, setUser, sequence, setSequence, width, setWidth, inColor, setInColor, numberModulus, setNumberModulus, colorModulus, setColorModulus, showSequence, setShowSequence, showTriangle, setShowTriangle, showGraph, setShowGraph, showIndex, setShowIndex, graphSize, setGraphSize}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleClose() {
        setDropdownOpen(false);
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
                <Row className="justify-content-between">

                    <Col className="justify-content-start">
                        <Navbar.Brand href="/">OAIS</Navbar.Brand>
                        <Button size="sm" disabled={sequence.sequenceId === ''} onClick={() => setDropdownOpen(!dropdownOpen)}>Settings</Button>
                    </Col>
                    
                    <Col>
                        <SearchForm sequence={sequence} setSequence={setSequence} width={width} />
                    </Col>
                </Row>
            </Navbar>

            <Modal show={dropdownOpen} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardGroup >
                        <Col>
                            <ZoomSettings sequence={sequence} width={width} setWidth={setWidth} />
                            <SequenceOptions sequence={sequence} showSequence={showSequence} setShowSequence={setShowSequence} showIndex={showIndex} setShowIndex={setShowIndex} showTriangle={showTriangle} setShowTriangle={setShowTriangle} numberModulus={numberModulus} setNumberModulus={setNumberModulus} setColorModulus={setColorModulus} />
                            <ColorOptions sequence={sequence} inColor={inColor} setInColor={setInColor} colorModulus={colorModulus} setColorModulus={setColorModulus} />
                            <GraphOptions showGraph={showGraph} setShowGraph={setShowGraph} graphSize={graphSize} setGraphSize={setGraphSize} />
                        </Col>
                    </CardGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}