import { useState } from "react";
import NavBar from "../NavBar/NavBar"

export default function Toolbar({ user, setUser, sequence, setSequence, width, setWidth, inColor, setInColor, numberModulus, setNumberModulus, colorModulus, setColorModulus, showSequence, setShowSequence, showTriangle, setShowTriangle, showGraph, setShowGraph, showIndex, setShowIndex, graphSize, setGraphSize }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <NavBar user={user} setUser={setUser} sequence={sequence} setSequence={setSequence} width={width} setDropdownOpen={setDropdownOpen} dropdownOpen={dropdownOpen} sequence={sequence} setWidth={setWidth} inColor={inColor} setInColor={setInColor} numberModulus={numberModulus} setNumberModulus={setNumberModulus} colorModulus={colorModulus} setColorModulus={setColorModulus} showIndex={showIndex} setShowIndex={setShowIndex} showSequence={showSequence} setShowSequence={setShowSequence} showTriangle={showTriangle} setShowTriangle={setShowTriangle} showGraph={showGraph} setShowGraph={setShowGraph} graphSize={graphSize} setGraphSize={setGraphSize} />

    )
}