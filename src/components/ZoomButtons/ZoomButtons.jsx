import './ZoomButtons.css'
export default function ZoomButtons({ sequence, width, setWidth }) {

console.log(sequence);
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
    <>
      <div className="zoom-buttons">
        <div style={{ paddingRight: '10px' }}>Zoom: </div>
        <form onSubmit={(evt) => handleZoomSubmit(evt, "minus")}>
          <button disabled={!sequence.sequenceId} type="submit">-</button>
        </form>
        <form onSubmit={(evt) => handleZoomSubmit(evt, "reset")}>
          <button disabled={!sequence.sequenceId} type="submit">Reset</button>
        </form>
        <form onSubmit={(evt) => handleZoomSubmit(evt, "plus")} >
          <button disabled={!sequence.sequenceId} type="submit" >+</button>
        </form>

      </div>
    </>
  );
}