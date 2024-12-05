import "./AsideButton.scss";

export type AsideButtonProps = {
    icon: string;
    alt?: string;
}

function AsideButton(props: AsideButtonProps) {
    return <li className="btn-aside">
        <a href="#" className="align-center justify-center border-r6">
            <img src={props.icon} alt={props.alt}/>
        </a>
    </li>;
}

export default AsideButton;