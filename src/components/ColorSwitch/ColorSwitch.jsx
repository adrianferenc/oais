


export default function ColorSwitch({ inColor, setInColor }) {


    return (
        <div className="change-row-buttons">
            <button value="add" onClick={() => setInColor(!inColor)} > {inColor ? `Switch to grayscale` : `Switch to color`}</button>
        </div>
    );
}