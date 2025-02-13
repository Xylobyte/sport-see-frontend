import {Text} from "recharts";

function CustomRadialText(props: any) {
	return (
		<Text
			{...props}
			fill="white"
			style={{fontSize: "calc(1vw / 1.1)"}}
			y={props.payload.value === "strength" ? props.y + 7 : props.y}
		>
			{props.payload.value[0].toUpperCase() + props.payload.value.slice(1)}
		</Text>
	);
}

export default CustomRadialText;