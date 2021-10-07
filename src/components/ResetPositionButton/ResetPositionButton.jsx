// import './ResetPositionButton.css'
import { Button } from "react-bootstrap";

export default function ResetPositionButton({ setViewStart }) {


  async function handleViewSubmit(evt) {
    evt.preventDefault();
    setViewStart(0);
  }

  return (
    <Button onClick={handleViewSubmit} >Reset</Button>
  );
}