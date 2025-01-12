import "./Activity.scss";
import {ActivityData} from "../../api/activity.types.ts";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export type ActivityProps = {
    activity: ActivityData;
}

function Activity(props: ActivityProps) {
    return <section id="activity-chart" className="flex column border-r5 gap-20">
        <div className="flex space-between">
            <h2 className="chart-title">Activité quotidienne</h2>

            <ul className="legend flex gap-20 align-center">
                <li>Poids (kg)</li>
                <li>Calories brûlées (kCal)</li>
            </ul>
        </div>

        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={730}
                height={250}
                margin={{
                    top: 15
                }}
                barGap={10}
                barSize={12}
                data={props.activity.sessions}
            >
                <CartesianGrid vertical={false} strokeDasharray={"3 3"}/>
                <XAxis dataKey="day" tickFormatter={value => value.split("-").pop()}/>
                <YAxis orientation="right" axisLine={false} tickLine={false}/>
                <Tooltip
                    labelStyle={{display: "none"}}
                    contentStyle={{background: "var(--primary-color)", border: "none"}}
                    itemStyle={{color: "white", display: "flex", flexDirection: "row-reverse"}}
                    separator=""
                    formatter={(value, name) => [value, name === "kilogram" ? "Kg" : "Kcal"]}
                />
                <Bar dataKey="kilogram" fill="black" radius={[10, 10, 0, 0]}/>
                <Bar dataKey="calories" fill="var(--primary-color)" radius={[10, 10, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    </section>;
}

export default Activity;
