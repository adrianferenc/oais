import Plot from 'react-plotly.js';

export default function Graph({ data, graphSize }) {
    return (
        <Plot
            data={data}
            layout={{
                width: 700+50*graphSize,
                height: 450+32.14*graphSize,
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