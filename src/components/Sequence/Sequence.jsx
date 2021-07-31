import rainbow from '../../utilities/rainbow'
import './Sequence.css';

export default function Sequence({ viewStart, sequence, width }) {

  return (
    <div className="OAIS">
      <div id='sequence'>
        {sequence.slice(viewStart, viewStart + 10).map((x, idx) => {
          let color = rainbow(((viewStart + idx)%100) / Math.min(100,sequence.length) + .001);
          return (
            <div style={{ backgroundColor: color, width: `${width}px`, position: "absolute", left: `${idx * (width * .78) + 40}px` }} className="chevron" value={+x} key={viewStart + idx}>
              <p className="number">{x}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}