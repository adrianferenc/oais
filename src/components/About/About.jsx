import { Link, useHistory } from "react-router-dom";
import { searchResult } from '../../utilities/sequences-api';
import './About.css'

export default function About({ setSequence }) {
    const history = useHistory();

    async function getSequence(query) {
        const search = await searchResult(query.padStart(6, "0"));
        setSequence({ sequenceId: query, sequence: search, options: { sequenceName: `A${query.padStart(6, "0")}` } })
        reroute();
    }

    function reroute() {
        history.push("/")
    }
    return (
        <div className = 'about-page'>
            <p>The <span className = "oais-color">Online Atlas of Integer Sequences</span> is a love letter to Neil Sloane's <a href="http://oeis.org/">Online Encyclopedia of Integer Sequences</a>. </p>

            <p>While an amazing repository of information, the visual functionality of the OEIS leaves something to be desired. That is where the <span className = "oais-color">Online <strong>Atlas</strong> of Integer Sequences</span> comes in. </p>
            
            <p>Each sequence in the OEIS has a sequence ID of the form "A######". To use the <span className = "oais-color">OAIS</span>, type any sequence ID into the search box (you may omit the A and leading 0s if you like).</p>
            
            <p>An example of a sequence in the OEIS is the <a href="http://oeis.org/A000032">Lucas numbers (A000032)</a>. The first few terms are:</p>
            
            <div className='oeis-sequence'>2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, 521, 843, 1364,...</div>
            
            <p>To explore the Lucas numbers in the <span className = "oais-color">OAIS</span>, search "32" or, better yet, just <Link to="/#" onClick={() => getSequence('32')}> <strong>Click Here</strong></Link></p>

            <p>The Atlas offers exploration of a sequence by allowing you to view a sequence dynamically using the dropdown toolbar. A gradient is applied to the sequence, which can be viewed as a list or a triangular array. A modulus can be applied, both to the numbers themselves and to the coloring. There are also dynamic graphs that show the growth of a sequence.</p>
        </div>
    )
}