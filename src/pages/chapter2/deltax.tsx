import { useState } from "react";
import { CartesianGrid, Label, Legend, Line, LineChart, ReferenceDot, ReferenceLine, XAxis, YAxis } from "recharts";

function getData(acceleration: number, time: number, v0: number) {
    return Array(time + 1).fill(0).map((_, i) => {
        return {
            'time': i,
            'velo': (v0 * i) + (0.5 * i * i * acceleration),
        };
    })
}

export function DeltaxGraph() {

    const [a, setA] = useState(1);
    const [t, setT] = useState(8);
    const [v0, setV0] = useState(3);


    return (
        <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 800, margin: 'auto' }} responsive data={getData(a, t, v0)}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', offset: -3 }} />
            <YAxis width="auto" dataKey="velo" label={{
                value: 'Displacement (m)',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
            }} />
            <Line type="monotone" dataKey="velo" stroke="#219EBC" />

            <Label
                value={`Slope is the velocity function evaluated at t`}
                position="insideTopLeft"
                offset={20}
                fill="#666"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
            />
            <Label
                value={`Relationship is quadratic`}
                position="insideLeft"
                offset={20}
                fill="#666"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
            />
        </LineChart>
    );
}