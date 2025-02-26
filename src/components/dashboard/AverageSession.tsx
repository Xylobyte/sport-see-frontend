import "./AverageSession.scss";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {AverageSessionsData} from "../../api/average-sessions.types.ts";
import CustomCursor from "../charts/CustomCursor.tsx";

export type AverageSessionProps = {
    averageSessions: AverageSessionsData;
}

const dayArray = ["L", "M", "M", "J", "V", "S", "D"];

function AverageSession(props: AverageSessionProps) {
    return <section id="average-session" className="flex column border-r5 gap-20">
        <h2>Durée moyenne des sessions</h2>

        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={500}
                data={props.averageSessions.sessions}
            >
                <XAxis
                    padding={{
                        right: 10,
                        left: 10
                    }}
                    dataKey="day"
                    style={{fill: "white", fontSize: "0.8em"}}
                    fontSize={2}
                    tickFormatter={val => dayArray?.[parseInt(val) - 1] || ''}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis hide={true} padding={{top: 80, bottom: 20}}/>
                <Tooltip
                    labelStyle={{display: "none"}}
                    contentStyle={{background: "white", border: "none"}}
                    itemStyle={{color: "black", display: "flex", flexDirection: "row-reverse"}}
                    separator=""
                    formatter={(value) => [value, "\xa0min"]}
                    cursor={<CustomCursor/>}
                />
                <Line
                    type="monotone"
                    dot={false}
                    activeDot={{r: 7}}
                    dataKey="sessionLength"
                    stroke="#FFF"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>

        <div className="over"></div>
    </section>;
}

export default AverageSession;
