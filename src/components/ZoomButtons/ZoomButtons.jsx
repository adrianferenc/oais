import './ZoomButtons.css'
export default function ZoomButtons({ width, setWidth }) {


  async function handleZoomSubmit(evt, pm) {
    evt.preventDefault();
    const change = pm === "plus" ? 10 : -10;
    setWidth(width + change > 30 ? width + change : 30);
  }

  return (
    <>
      <div className="zoom-buttons">
        <form onSubmit={(evt) => handleZoomSubmit(evt, "minus")}>
          <button type="submit">-</button>
        </form>
        <form onSubmit={(evt) => handleZoomSubmit(evt, "plus")} >
          <button type="submit" >+</button>
        </form>

      </div>
    </>
  );
}