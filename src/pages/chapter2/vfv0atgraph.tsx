import { useState } from "react";
import { CartesianGrid, Label, Legend, Line, LineChart, ReferenceDot, ReferenceLine, XAxis, YAxis } from "recharts";

function getData(acceleration: number, time: number, v0: number) {
    return Array(time + 1).fill(0).map((_, i) => {
        return {
            'time': i,
            'velo': v0 + (i * acceleration),
        };
    })
}

export function Vfv0atgraph() {

    const [a, setA] = useState(1);
    const [t, setT] = useState(8);
    const [v0, setV0] = useState(3);


    return (
        <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 800, margin: 'auto' }} responsive data={getData(a, t, v0)}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', offset: -3 }} />
            <YAxis width="auto" dataKey="velo" label={{
                value: 'Velocity (m/s)',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
            }} />
            <Line type="monotone" dataKey="velo" stroke="#219EBC" />
            <ReferenceDot
                x={0}
                y={v0}
                r={5}
                fill="#FB8500"
                stroke="#FB8500"
            >
                <Label value={`v0 = ${v0}`} position="top" offset={10} />
            </ReferenceDot>

            <ReferenceDot
                x={t}
                y={v0 + a * t}
                r={5}
                fill="#FB8500"
                stroke="#FB8500"
            >
                <Label value={`vf = ${v0 + a * t}`} position="left" offset={15} />
            </ReferenceDot>


            <Label
                value={`Slope (acceleration) = ${a}`}
                position="insideTopLeft"
                offset={20}
                fill="#666"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
            />
        </LineChart>
    );
}