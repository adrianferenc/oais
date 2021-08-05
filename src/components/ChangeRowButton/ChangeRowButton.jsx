import './ChangeRowButton.css'

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
    <div className="change-row-buttons">
      <button value="add" onClick={handleViewSubmit} >Add A Row</button>
      <button value="remove" onClick={handleViewSubmit} >Remove A Row</button>
    </div>
  );
}