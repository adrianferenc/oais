export default function ResetPositionButton({ setViewStart }) {


  async function handleViewSubmit(evt, pm) {
    evt.preventDefault();
    setViewStart(0);
  }

  return (
    <>
      <div>
        <form onSubmit={(evt) => handleViewSubmit(evt, "reset")}>
          <button type="submit">Reset</button>
        </form>
      </div>
    </>
  );
}