import React from "react";
import PropTypes from 'prop-types';

export default function TextInput (props) {
    return(
        <div>
            {props.label && <p className="text-gray-900 font-bold mb-2">{props.label}</p>}
            <div>
                <input
                    className="placeholder-gray-500 text-xs border mb-3 rounded-lg border-silver p-3 w-full"
                    placeholder= {props.placeholder}
                    onChange={props.onChange}
                    error={props.error}
                    value={props.value}
                />
            </div>
            {props.error && <p>{props.error}</p>}
        </div>
    );
}


TextInput.propTypes = {
    error: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    iconName: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onIconClick: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
  };