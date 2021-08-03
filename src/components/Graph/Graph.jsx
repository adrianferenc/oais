import Plot from 'react-plotly.js';

export default function Graph({ data }) {
    return (
        <Plot
            data={data}
        />
    )
}