import "./Aside.scss";
import AsideButton from "./AsideButton.tsx";
import meditation from "../assets/icons/meditation.svg";
import natation from "../assets/icons/natation.svg";
import muscu from "../assets/icons/muscu.svg";
import velo from "../assets/icons/velo.svg";

function Aside() {
    return <aside className="column justify-center align-center">
        <nav>
            <ul className="column gap-15">
                <AsideButton icon={meditation} alt="Meditation page"/>
                <AsideButton icon={natation} alt="Natation page"/>
                <AsideButton icon={velo} alt="Vélo page"/>
                <AsideButton icon={muscu} alt="Musculation page"/>
            </ul>
        </nav>

        <span>Copyright, SportSee 2020</span>
    </aside>;
}

export default Aside;