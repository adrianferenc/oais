import ZoomButtons from '../../components/ZoomButtons/ZoomButtons';
import ColorSwitch from '../ColorSwitch/ColorSwitch';
import SetModButton from '../SetModButton/SetModButton';
import { useLocation } from 'react-router-dom'
import './Dropdown.css';



export default function Dropdown({ sequence, dropdownOpen, setDropdownOpen, width, setWidth, inColor, setInColor, colorModulus, setColorModulus, showGraph, setShowGraph, showIndex, setShowIndex }) {
    const location = useLocation();
    let dropdownClasses = "dropdown-window";
    if (dropdownOpen) {
        dropdownClasses = "dropdown-window open"
    }
    return (
        location.pathname === '/' && <div className={dropdownClasses}>
            <div className="dropdown-options">
                <div className='dropdown-top-view'>
                    <button disabled={location.pathname !== '/'} onClick={() => { setDropdownOpen(!dropdownOpen) }}> {dropdownOpen ? 'Close' : 'Open'}</button>
                    <div className="spacer" />
                    <ZoomButtons width={width} setWidth={setWidth} />
                </div>
                <div className='dropdown-body'>
                    <div className='dropdown-option-box'>
                        <h4>Number Options</h4>
                        <div>Show Sequence</div>
                        <div>Show Triangle</div>
                        <div>Apply Mod</div>
                        <div><button disabled={sequence.sequenceId === ''} onClick={() => { setShowIndex(!showIndex) }}>{showIndex ? `Hide` : `Show`} Index</button></div>
                    </div>

                    <div className='dropdown-option-box'>
                        <h4>Color Options</h4>
                        <div><ColorSwitch inColor={inColor} setInColor={setInColor} /></div>
                        <div><SetModButton sequence={sequence} modulus={colorModulus} setModulus={setColorModulus} /></div>
                    </div>

                    <div className='dropdown-option-box'>
                        <h4>Graph Options</h4>
                        <div><button onClick={() => setShowGraph(!showGraph)}>{showGraph ? `Hide` : `Show`} Graph</button></div>
                        <div>Select Size</div>
                    </div>


                </div>

            </div>
        </div>

    )
}