import "./Toggle.css"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


export default function Toggle({ handleChange, isChecked, scrollLocation }) {

    Toggle.propTypes = {
        handleChange: PropTypes.func,
        isChecked: PropTypes.bool,
        scrollLocation: PropTypes.object
      };
    
    let element = <FontAwesomeIcon icon={faSun} />

    if (isChecked) {
        element = <FontAwesomeIcon icon={faMoon} />
    }

    return (
        <div 
            className="toggle-container"
            ref={scrollLocation}
        >
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