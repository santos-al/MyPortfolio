import darkLogo from "../../assets/my-logo-dark.png";
import lightLogo from "../../assets/my-logo-light.png";
import "./NavBar.css"

export default function NavBar() {


    return (
        <nav>
            <img src={darkLogo} alt="logo" className="logo" />
            <ul className="nav-bar-content">
                <li>
                    <button className="button">Projects</button>
                </li>
                <li>
                    <button>Resume</button>
                </li>
            </ul>
        </nav>
        
    );
}