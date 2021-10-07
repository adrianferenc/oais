// import './ChangeRowButton.css'
import { Button, Container } from "react-bootstrap";

export default function ChangeRowButton({ rows, setRows }) {
  async function handleViewSubmit(evt) {
    evt.preventDefault();
    if (evt.target.value === "add") {
      setRows(rows + 1)
    } else if (evt.target.value === "remove") {
      setRows(Math.max(rows - 1, 10))
    }
  }

  return (
    <Container>
      <Button size="sm" value="add" onClick={handleViewSubmit} >Add A Row</Button>
      <Button size="sm" value="remove" onClick={handleViewSubmit} >Remove A Row</Button>
    </Container>
  );
}