import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.scss';

import cn from 'classnames';

export const P = ({
  size = 's',
  className,
  children,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
        [styles.xl]: size == 'xl',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
