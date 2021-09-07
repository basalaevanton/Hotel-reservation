import { CheckboxProps } from './Checkbox.props';
import styles from './Checkbox.module.scss';

import cn from 'classnames';
import { useState, ForwardedRef, forwardRef } from 'react';
import { P } from '../index';

export const Checkbox = forwardRef(
  (
    { label, info, className, ...props }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [state, setState] = useState(false);

    return (
      <div className={cn(className, styles.checkbox)}>
        <input
          type="checkbox"
          name={label}
          value={label}
          id={label}
          checked={state}
          onChange={() => setState(!state)}
          ref={ref}
          {...props}
        />

        {info ? (
          
            <label className={styles.labelInfo} htmlFor={label}>
              {label}
            <P size='xs' className={styles.info}>{info}</P>
            </label>
        
        ) : (
          <label className={styles.label} htmlFor={label}>{label}</label>
        )}
      </div>
    );
  }
);

export default Checkbox;
