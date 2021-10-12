import React from 'react';

import styles from './Marker.module.scss';
import { MarkerProps } from './Marker.props';

export const Marker = ({
  text,
  onClick,
  ...props
}: MarkerProps): JSX.Element => (
  <div className={styles.wrapper} onClick={onClick} {...props}>
    {text}
  </div>
);
