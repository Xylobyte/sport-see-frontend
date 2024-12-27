import "./Header.scss";
import logo from "../assets/logo-full.png";
import {memo} from "react";

function Header() {
    return <header className="flex gap-20">
        <a href="#">
            <img src={logo} alt="SportSee logo"/>
        </a>

        <nav className="flex">
            <ul className="flex space-around align-center">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Profil</a></li>
                <li><a href="#">Réglages</a></li>
                <li><a href="#">Communauté</a></li>
            </ul>
        </nav>
    </header>;
}

export default memo(Header);
