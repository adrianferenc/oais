import './Sequence.css';

export default function Sequence({ viewStart, sequence, width }) {

  return (
    <div className="OAIS">
      <div id='sequence'>
        {sequence.slice(viewStart, viewStart + 10).map((x, idx) => {
          return (
            <div style={{width: `${width}px`, position:"absolute", left:`${idx*(width*.78)+40}px`}} className="chevron" value={+x} key={idx}>
              <p className="number">{x}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}