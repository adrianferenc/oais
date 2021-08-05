import './ZoomButtons.css'
export default function ZoomButtons({ sequence, width, setWidth }) {

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
        <div style={{ paddingRight: '1rem' }}>Zoom: </div>
        <form onSubmit={(evt) => handleZoomSubmit(evt, "minus")}>
          <button className = 'change-button button' disabled={!sequence.sequenceId} type="submit">-</button>
        </form>
        <form onSubmit={(evt) => handleZoomSubmit(evt, "reset")}>
          <button className = 'button' disabled={!sequence.sequenceId} type="submit">Reset</button>
        </form>
        <form onSubmit={(evt) => handleZoomSubmit(evt, "plus")} >
          <button className = 'change-button button' disabled={!sequence.sequenceId} type="submit" >+</button>
        </form>

      </div>
    </>
  );
}