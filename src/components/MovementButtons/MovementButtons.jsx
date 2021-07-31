export default function MovementButtons({ viewStart, setViewStart }) {


  async function handleViewSubmit(evt, pm) {
    evt.preventDefault();
    if (pm === "reset") {
      setViewStart(0);
    } else {
      const change = pm === "right" ? 10 : -10;
      setViewStart(viewStart + change > 0 ? viewStart + change : 0);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={(evt) => handleViewSubmit(evt, "right")} >
          <button type="submit" >&#8594;</button>
        </form>
        <form onSubmit={(evt) => handleViewSubmit(evt, "left")}>
          <button type="submit">&#8592;</button>
        </form>
        <form onSubmit={(evt) => handleViewSubmit(evt, "reset")}>
          <button type="submit">Reset</button>
        </form>
      </div>
    </>
  );
}