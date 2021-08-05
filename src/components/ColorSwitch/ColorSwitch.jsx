


export default function ColorSwitch({ inColor, setInColor }) {


    return (
        <div className="change-row-buttons">
            <button value="add" onClick={() => setInColor(!inColor)} > Switch to {inColor ? `Grayscale` : `Color`}</button>
        </div>
    );
}