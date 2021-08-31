import { SwitchProps } from './Switch.props';
import styles from './Switch.module.scss';

import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Switch = forwardRef(
  (
    { label, isChecked, handleToggle, className, ...props }: SwitchProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.customSwitch)}>
        <input
          type="checkbox"
          name={label}
          value={label}
          id={label}
          checked={isChecked}
          onChange={handleToggle}
          className={styles.switchCheckbox}
          ref={ref}
          {...props}
        />
        <label className={styles.switchLabel} htmlFor={label}>
          <span className={styles.switchButton} />
          <span className={styles.info}> {label}</span>
        </label>
      </div>
    );
  }
);
