import Plot from 'react-plotly.js';

export default function Graph({ data }) {
    return (
        <Plot
            data={data}
            layout={{
                
                title: {
                    text: data ? data[0].name : '',
                    font: {
                        family: 'Courier New, monospace',
                        size: 24
                    },
                    xref: 'paper'
                },
                xaxis: {

                }
            }}

            config={{
                scrollZoom: true,
                displayModeBar: false,
                showTips: false
            }}
        />
    )
}