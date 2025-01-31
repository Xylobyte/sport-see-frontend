import "./ScoreCounter.scss";
import {Cell, Pie, PieChart} from "recharts";

export type ScoreCounterProps = {}

function ScoreCounter(props: ScoreCounterProps) {
    const data = [
        {name: 'Group A', value: 40},
        // {name: 'tr', value: 60}
    ];

    return <section id="score-counter" className="flex column border-r5 gap-20">
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                cx={95}
                cy={95}
                innerRadius={85}
                outerRadius={98}
                fill="red"
                dataKey="value"
                startAngle={220}
                endAngle={-40}
                cornerRadius={50}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === "tr" ? "transparent" : "red"}/>
                ))}
            </Pie>
        </PieChart>
    </section>;
}

export default ScoreCounter;