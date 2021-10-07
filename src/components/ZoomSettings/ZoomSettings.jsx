// import './ZoomSettings.css'
import { Button, ButtonGroup, InputGroup, FormControl, Card } from "react-bootstrap";

export default function ZoomSettings({ sequence, width, setWidth }) {

  async function handleZoomSubmit(evt, pm) {
    evt.preventDefault();
    if (pm === 'reset') {
      setWidth(60);
    } else {
      const change = pm === "plus" ? 10 : -10;
      setWidth(width + change > 30 ? width + change : 30);
    }
  }

  return (
    <Card className="text-center">
      <Card.Header>Change Sequence Size</Card.Header>
      <Card.Body>
        <ButtonGroup size="sm">
          <Button variant="secondary" id="zoom-minus" onClick={(evt) => handleZoomSubmit(evt, "minus")}>
            -
          </Button>
          <Button variant="secondary" id="zoom-reset" onClick={(evt) => handleZoomSubmit(evt, "reset")}>
            Reset
          </Button>
          <Button variant="secondary" id="zoom-plus" onClick={(evt) => handleZoomSubmit(evt, "plus")}>
            +
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}