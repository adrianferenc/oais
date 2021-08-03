export default function NewRowButton({ rows, setRows }) {
  async function handleViewSubmit(evt) {
    evt.preventDefault();
    setRows(rows+1)
  }

  return (
    <div className="new-row-button">
      <form onSubmit={handleViewSubmit} >
        <button type="submit" >Show Another Row</button>
      </form>
    </div>
  );
}