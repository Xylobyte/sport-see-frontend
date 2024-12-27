import "./InfoCard.scss";
import {ReactElement} from "react";

export type InfoCardProps = {
    id?: string;
    color: string;
    icon: ReactElement;
    value: number;
    label: string;
    unit?: string;
}

function InfoCard(props: InfoCardProps) {
    return <div id={props.id} className="info-card flex gap-15 align-center border-r5">
        <div
            className="icon flex align-center justify-center border-r6"
            style={{background: `color-mix(in srgb, ${props.color}, transparent 80%)`}}
        >
            {props.icon}
        </div>

        <div className="flex column gap-10">
            <span className="value">{props.value}{props.unit}</span>
            <span className="label">{props.label}</span>
        </div>
    </div>;
}

export default InfoCard;