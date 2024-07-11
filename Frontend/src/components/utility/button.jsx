import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button type="submit" onClick={props.onClick} className="bg-purple text-white text-sm border mb-3 rounded-lg border-silver p-3 w-full disabled:cursor-not-allowed">
        {props.children}
      </button>
  )};


Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};