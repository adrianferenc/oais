import { Link, useHistory } from "react-router-dom";
import { searchResult } from '../../utilities/sequences-api';
import { Container } from "react-bootstrap";
//import './About.css'

export default function About({ setSequence }) {
    const history = useHistory();

    async function getSequence(query) {
        const search = await searchResult(query.padStart(6, "0"));
        setSequence({ sequenceId: query, sequence: search.sequence, description: search.description, options: { sequenceName: `A${query.padStart(6, "0")}` } })
        reroute();
    }

    function reroute() {
        history.push("/")
    }
    return (
        <Container className='about-page'>
            <p className="lead">The Online Atlas of Integer Sequences (OAIS) is a love letter to Neil Sloane's <a href="http://oeis.org/">Online Encyclopedia of Integer Sequences (OEIS)</a>. </p>

            <p className="lead">While an amazing repository of information, the visual functionality of the OEIS leaves something to be desired. That is where the Online Atlas of Integer Sequences comes in. </p>

            <p className="lead">Each sequence in the OEIS has a sequence ID of the form "A######". To use the OAIS, type any sequence ID into the search box (you may omit the A and leading 0s if you like).</p>

            <p className="lead">An example of a sequence in the OEIS is the <a href="http://oeis.org/A000032">Lucas numbers</a>, <a href="http://oeis.org/A000032">sequence ID A000032</a>. The first few terms are:</p>

            <p className="text-center" style={{ fontFamily: 'monospace' }}>2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, 521, 843, 1364,...</p>

            <p className="lead">To explore the Lucas numbers in the OAIS, search 32 in the search bar or, better yet, just <Link to="/#" onClick={() => getSequence('32')}> <strong>Click Here</strong></Link></p>

            <p className="lead">The OAIS offers exploration of a sequence by allowing you to view a sequence dynamically using the Settings. A gradient is applied to the sequence, which can be viewed as a list or a triangular array. A modulus can be applied, both to the numbers themselves and to the coloring. There are also dynamic graphs that show the growth of a sequence.</p>
        </Container>
    )
}