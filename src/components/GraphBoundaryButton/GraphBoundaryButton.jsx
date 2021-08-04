export default function GraphBoundaryButton({ type, dataFormatter, setData, graphStart, graphEnd, boundarySetter, boundary }) {
    const newBoundary = boundary === 'Start' ? graphStart : graphEnd;

    function handleChange(evt) {
        if (evt.target.value === 'minus' && (boundary === 'Start' || graphEnd > graphStart + 1)) {
            boundarySetter(newBoundary > 0 ? newBoundary - 1 : newBoundary)
        } else if (evt.target.value === 'plus' && (boundary === 'End' || graphStart < graphEnd - 1)) {
            boundarySetter(newBoundary + 1);
        }
        setData(dataFormatter(type));
    }

    return (
        <>
            <h6>Graph {boundary === 'Start' ? `Starting` : 'Ending'} Point</h6>
            <button value="minus" onClick={handleChange}>-</button>
            <div>{newBoundary}</div>
            <button value="plus" onClick={handleChange}>+</button>
        </>
    )
}