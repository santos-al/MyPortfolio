import "./Toggle.css"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


export default function Toggle({ handleChange, isChecked }) {

    Toggle.propTypes = {
        handleChange: PropTypes.func,
        isChecked: PropTypes.bool
      };
    
    let element = <FontAwesomeIcon icon={faSun} />

    if (isChecked) {
        element = <FontAwesomeIcon icon={faMoon} />
    }

    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check">{element}</label>
            
        </div>
    );
}