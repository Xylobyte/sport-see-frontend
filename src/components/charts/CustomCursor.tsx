import {Rectangle} from "recharts";

function CustomCursor(props: any) {
    const {points, width, height} = props;
    const {x} = points[0];

    return (
        <Rectangle
            fill="#00000030"
            stroke="#00000030"
            x={x}
            y={0}
            width={width}
            height={height+100}
        />
    );
}

export default CustomCursor;