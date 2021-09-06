import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import ArrowIcon from './arrow.svg';

import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { ButtonIcon } from '../../components';

export const Input = forwardRef(
  (
    { className, arrow, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {arrow && <ButtonIcon icon="inputArrow" className={styles.arrowIcon} />}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
