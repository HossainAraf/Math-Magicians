import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => (
  <button type="button" className={className} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired, // Validate label as a required string
  onClick: PropTypes.func.isRequired, // Validate onClick as a required function
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '', // Provide a default empty string as the value for className
};

export default Button;
