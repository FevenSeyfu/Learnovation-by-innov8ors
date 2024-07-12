import React from "react";
import PropTypes from 'prop-types';

export default function TextInput (props) {
    return(
        <div>
            {props.label && <p className="text-gray-700 font-semibold mb-2 dark:text-white">{props.label}</p>} 
            <div className="mb-3">
                <input
                    className="placeholder-gray-500 text-xs text-gray-700 dark:text-white border rounded-lg border-silver p-3 w-full focus:outline-none focus:ring focus:ring-gray-500 dark:bg-slate-700 dark:border-slate-700"
                    placeholder= {props.placeholder}
                    type={props.type}
                    onChange={props.onChange}
                    // eslint-disable-next-line react/no-unknown-property
                    error={props.error}
                    value={props.value}
                />
                {props.error && <p className="text-red-500 text-xs">{props.error}</p>}
            </div>
        </div>
    );
}


TextInput.propTypes = {
    error: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    iconName: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onIconClick: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
  };