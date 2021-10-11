import React from 'react';
import PropTypes from 'prop-types';
import styles from './Marker.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Marker = ({ text, onClick, ...props }) => (
  <div className={styles.wrapper} alt={text} onClick={onClick} {...props}>
    {text}
  </div>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
