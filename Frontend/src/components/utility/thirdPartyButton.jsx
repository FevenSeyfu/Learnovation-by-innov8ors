import React from 'react';
import PropTypes from 'prop-types';

export default function ThirdPartyButton(props) {
  return (
    <button type="submit" onClick={props.onClick} className="bg-white text-textColor dark:bg-gray-900 dark:text-white dark:border-neutral-700 text-sm border mb-3 rounded-full border-silver p-3 w-full flex justify-center inline-block">
        {props.children}
      </button>
)}


ThirdPartyButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};