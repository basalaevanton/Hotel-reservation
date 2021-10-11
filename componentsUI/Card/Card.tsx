import { CardProps } from './Card.props';
import styles from './Card.module.scss';

import cn from 'classnames';
import { forwardRef, ForwardedRef } from 'react';

export const Card = forwardRef(
  (
    { type, className, children, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.hotel]: type == 'hotel',
          [styles.room]: type == 'room',
          [styles.index]: type == 'index',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
