import "./Intensity.scss";
import {PerformanceData} from "../../api/performance.types.ts";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";

export type IntensityProps = {
	userPerfs: PerformanceData
}

function Intensity(props: IntensityProps) {
	const data = [
		{
			subject: 'Math',
			A: 120,
			B: 110,
			fullMark: 150
		},
		{
			subject: 'Chinese',
			A: 98,
			B: 130,
			fullMark: 150
		},
		{
			subject: 'English',
			A: 86,
			B: 130,
			fullMark: 150
		},
		{
			subject: 'Geography',
			A: 99,
			B: 100,
			fullMark: 150
		},
		{
			subject: 'Physics',
			A: 85,
			B: 90,
			fullMark: 150
		},
		{
			subject: 'History',
			A: 65,
			B: 85,
			fullMark: 150
		}
	];

	return <section id="intensity" className="flex column border-r5 gap-20">
		<h2>Intensité</h2>

		<div>
			<p>Test red</p>

			<div id="dont-touch">
			</div>
		</div>

		<ResponsiveContainer height="100%" width="100%">
			<RadarChart cx="50%" cy="50%" data={data}>
				<PolarGrid radialLines={false}/>
				<PolarAngleAxis dataKey="subject"/>
				<Radar name="Mike" dataKey="A" stroke="red" fill="red" fillOpacity={0.6}/>
			</RadarChart>
		</ResponsiveContainer>
	</section>;
}

export default Intensity;
