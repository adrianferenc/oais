import './GraphSizeButtons.css'
export default function GraphSizeButtons({ graphSize, setGraphSize }) {
    return (
        <>
            <div className='graph-size-buttons'>
                <div >Graph Size </div>
                <div className='graph-size-controllers'>
                    <button className="size-button" onClick={() => { setGraphSize(Math.max(-2, graphSize - 1)) }} >-</button>
                    <button className='reset-graph-size' onClick={() => setGraphSize(0)}>Reset</button>
                    <button className="size-button" onClick={() => { setGraphSize(Math.min(25, graphSize + 1)) }}>+</button>
                </div>
            </div>
        </>
    );
}