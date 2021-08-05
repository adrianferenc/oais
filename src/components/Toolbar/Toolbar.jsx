import { useState } from "react";
import NavBar from "../NavBar/NavBar"
import Dropdown from "../Dropdown/Dropdown"


export default function Toolbar({ user, setUser, sequence, setSequence, width, setWidth, inColor, setInColor, colorModulus, setColorModulus, showGraph, setShowGraph, showIndex, setShowIndex }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='toolbar'>
            <NavBar user={user} setUser={setUser} sequence={sequence} setSequence={setSequence} />
            <div className="dropdown">
                <Dropdown sequence={sequence} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} width={width} setWidth={setWidth} inColor={inColor} setInColor={setInColor} colorModulus={colorModulus} setColorModulus={setColorModulus} showIndex = {showIndex} setShowIndex = {setShowIndex} showGraph={showGraph} setShowGraph={setShowGraph} />
            </div>
        </div>
    )
}