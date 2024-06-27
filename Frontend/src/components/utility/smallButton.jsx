import React from 'react';
import PropTypes from 'prop-types';


export default function SmallButton(props) {
  return (
    <div onClick={props.onClick} className="inline-block text-sm text-white mt-10 rounded-lg py-2 px-4 bg-gradient-to-r from-indigo-500 via-fusciaPink to-lightPink text-center">
        {props.children}
    </div>
  );
}


SmallButton.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };