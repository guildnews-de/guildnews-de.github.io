import React from 'react';
import PropTypes from 'prop-types';
import Spoil from './assets/screenshot.jpg'
import '../custom_commented.css';
import './hide.css';

/**
 * Primary UI component for user interaction
 */
export const Hide = ({ src, size, ...props }) => {
  return (
    <div className='hide-spoiler'>
      <figure>
        <img
          src={src}
          width={size}
          {...props}
        />
      </figure>
    </div>
  );
};

Hide.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Hide.defaultProps = {
  src: Spoil,
  size: 300,
};
