import darkLogo from "../../assets/my-logo-dark.png";
import lightLogo from "../../assets/my-logo-light.png";
import "./NavBar.css"
import PropTypes from 'prop-types';

export default function NavBar({ isChecked }) {

    NavBar.propTypes = {
        isChecked: PropTypes.bool,
      };

    return (
        <nav>
            <img src={isChecked ? lightLogo : darkLogo} alt="logo" className="logo" />
        </nav>
        
    );
}