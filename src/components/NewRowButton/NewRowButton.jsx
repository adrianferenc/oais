export default function NewRowButton({ rows, setRows }) {
  async function handleViewSubmit(evt) {
    evt.preventDefault();
    setRows(rows+1)
  }

  return (
    <div className="new-row-button">
      <form onSubmit={handleViewSubmit} >
        <button type="submit" >Add Row</button>
      </form>
    </div>
  );
}