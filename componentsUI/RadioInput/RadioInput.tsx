import { RadioInputProps } from './RadioInput.props';
import styles from './RadioInput.module.scss';

import cn from 'classnames';
import {  ForwardedRef, forwardRef } from 'react';

export const RadioInput = forwardRef(
  (
    {
      label,
      name,
      isChecked,
      handleChange,
      className,
      ...props
    }: RadioInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const handleRadioChange = (e: { currentTarget: { id: string } }) => {
      const { id } = e.currentTarget;

      handleChange(id); // Send back id to radio group for comparison
    };

    return (
      <div className={cn(className, styles.customRadio)}>
        <input
          name={name}
          type="radio"
          id={label}
          checked={isChecked}
          onChange={handleRadioChange}
          ref={ref}
          {...props}
        />
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      </div>
    );
  }
);
