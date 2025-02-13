import "./Intensity.scss";
import {PerformanceData} from "../../api/performance.types.ts";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import {useMemo} from "react";
import CustomRadialText from "../charts/CustomRadialText.tsx";

export type IntensityProps = {
	userPerfs: PerformanceData
}

function Intensity(props: IntensityProps) {
	const data = useMemo(() =>
			props.userPerfs.data.map(up => ({
				...up,
				kind: props.userPerfs.kind[up.kind.toString()]
			}))
		, [props.userPerfs]);

	return <section id="intensity" className="flex column border-r5">
		<h2>Intensité</h2>

		<ResponsiveContainer height="100%" width="100%">
			<RadarChart data={data} margin={{left: 40, right: 40}}>
				<PolarGrid radialLines={false} style={{stroke: "white"}}/>
				<PolarAngleAxis
					dataKey="kind"
					tick={<CustomRadialText/>}
				/>
				<Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6}/>
			</RadarChart>
		</ResponsiveContainer>
	</section>;
}

export default Intensity;
