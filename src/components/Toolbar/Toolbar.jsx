import { useState } from "react";
import NavBar from "../NavBar/NavBar"
import Dropdown from "../Dropdown/Dropdown"


export default function Toolbar({ user, setUser, sequence, setSequence, width, setWidth, inColor, setInColor, numberModulus, setNumberModulus, colorModulus, setColorModulus, showSequence, setShowSequence, showTriangle, setShowTriangle, showGraph, setShowGraph, showIndex, setShowIndex, graphSize, setGraphSize }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='toolbar'>
            <NavBar user={user} setUser={setUser} sequence={sequence} setSequence={setSequence} width={width} />
            <div className="dropdown">
                <Dropdown sequence={sequence} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} width={width} setWidth={setWidth} inColor={inColor} setInColor={setInColor} numberModulus={numberModulus} setNumberModulus={setNumberModulus} colorModulus={colorModulus} setColorModulus={setColorModulus} showIndex={showIndex} setShowIndex={setShowIndex} showSequence={showSequence} setShowSequence={setShowSequence} showTriangle={showTriangle} setShowTriangle={setShowTriangle} showGraph={showGraph} setShowGraph={setShowGraph} graphSize={graphSize} setGraphSize={setGraphSize}/>
            </div>
        </div>
    )
}