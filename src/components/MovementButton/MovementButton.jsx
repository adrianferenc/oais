export default function MovementButton({ viewStart, setViewStart, direction }) {
  const label = direction === 'right' ? <>&#8594;</> : <>&#8592;</>;

  async function handleViewSubmit(evt) {
    evt.preventDefault();
    const change = direction === "right" ? 1 : -1;
    setViewStart(viewStart + change > 0 ? viewStart + change : 0)
  }

  return (
    <div className="movement-button">
      <form onSubmit={handleViewSubmit} >
        <button type="submit" >{label}</button>
      </form>
    </div>
  );
}