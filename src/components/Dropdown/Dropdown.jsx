import ZoomButtons from '../../components/ZoomButtons/ZoomButtons';
import ColorSwitch from '../ColorSwitch/ColorSwitch';
import SetModButton from '../SetModButton/SetModButton';
import { useLocation } from 'react-router-dom'
import './Dropdown.css';
import GraphSizeButtons from '../GraphSizeButtons/GraphSizeButtons';



export default function Dropdown({ sequence, dropdownOpen, setDropdownOpen, numberModulus, setNumberModulus, width, setWidth, inColor, setInColor, colorModulus, setColorModulus, showSequence, setShowSequence, showTriangle, setShowTriangle, showGraph, setShowGraph, showIndex, setShowIndex, graphSize, setGraphSize }) {
    const location = useLocation();
    let dropdownClasses = "dropdown-window";
    if (dropdownOpen) {
        dropdownClasses = "dropdown-window open"
    }
    return (
        location.pathname === '/' && <div className={dropdownClasses}>
            <div className="dropdown-options">
                <div className='dropdown-top-view'>
                    <button className="open-button" disabled={!sequence.sequenceId} onClick={() => { setDropdownOpen(!dropdownOpen) }}> {dropdownOpen ? 'Close' : 'Open'}</button>
                    <div className="spacer" />
                    <ZoomButtons sequence={sequence} width={width} setWidth={setWidth} />
                </div>
                <div className='dropdown-body'>
                    <div className='dropdown-option-box'>
                        <h4>Sequence Options</h4>
                        <div><button onClick={() => setShowSequence(!showSequence)}>{showSequence ? `Hide` : `Show`} Sequence</button></div>
                        <div><button disabled={sequence.sequenceId === ''} onClick={() => { setShowIndex(!showIndex) }}>{showIndex ? `Hide` : `Show`} Index</button></div>
                        <div><button onClick={() => setShowTriangle(!showTriangle)}>{showTriangle ? `Hide` : `Show`} Triangle</button></div>
                        <div><SetModButton sequence={sequence} modulus={numberModulus} setModulus={(x) => { setNumberModulus(x); setColorModulus(x) }} type={'Number'} /></div>
                    </div>

                    <div className='dropdown-option-box'>
                        <h4>Color Options</h4>
                        <div><ColorSwitch inColor={inColor} setInColor={setInColor} /></div>
                        <div><SetModButton sequence={sequence} modulus={colorModulus} setModulus={setColorModulus} type={'Color'} /></div>
                    </div>

                    <div className='dropdown-option-box'>
                        <h4>Graph Options</h4>
                        <div><button onClick={() => setShowGraph(!showGraph)}>{showGraph ? `Hide` : `Show`} Graph</button></div>
                        <div><GraphSizeButtons graphSize={graphSize} setGraphSize={setGraphSize} /></div>
                    </div>


                </div>

            </div>
        </div>

    )
}