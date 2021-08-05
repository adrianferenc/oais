export default function ResetPositionButton({ viewStart, setViewStart }) {


  async function handleViewSubmit(evt) {
    evt.preventDefault();
    setViewStart(0);
  }

  return (
      <div>
        <form onSubmit={handleViewSubmit}>
          <button type="submit">Reset</button>
        </form>
      </div>
  );
}