import "./ScoreCounter.scss";
import {Cell, Customized, Pie, PieChart, ResponsiveContainer, Text} from "recharts";
import {useMemo} from "react";

export type ScoreCounterProps = {
	score: number;
}

function ScoreCounter(props: ScoreCounterProps) {
	const data = useMemo(() => [
		{name: 'Today score', value: props.score},
		{name: 'tr', value: 1 - props.score}
	], [props.score]);

	return <section id="score-counter" className="flex column border-r5">
		<h2>Score</h2>

		<ResponsiveContainer>
			<PieChart>
				<Pie
					data={data}
					innerRadius={75}
					outerRadius={90}
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
				<Pie
					data={[{name: 'inner', value: 1}]}
					innerRadius={0}
					outerRadius={75}
					fill="white"
					dataKey="value"
					isAnimationActive={false}
				>
				</Pie>
				<Customized component={p => {
					const data = p as any;
					return <>
						<Text
							x={data.width / 2}
							y={data.height / 2.4}
							textAnchor={"middle"}
							verticalAnchor={"middle"}
							fontSize={30}
							fill="black"
						>
							{`${props.score * 100}%`}
						</Text>
						<Text
							x={data.width / 2}
							y={data.height / 2.4 + 28}
							textAnchor={"middle"}
							verticalAnchor={"middle"}
							fill="gray"
						>
							de votre
						</Text>
						<Text
							x={data.width / 2}
							y={data.height / 2.4 + 48}
							textAnchor={"middle"}
							verticalAnchor={"middle"}
							fill="gray"
						>
							objectif
						</Text>
					</>;
				}}/>
			</PieChart>
		</ResponsiveContainer>
	</section>;
}

export default ScoreCounter;