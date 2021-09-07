import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.scss';

import cn from 'classnames';

export const P = ({
  size = 's',
  bold,
  className,
  children,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.xs]: size == 'xs',
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
        [styles.xl]: size == 'xl',
        [styles.bold]: bold == true,
      })}
      {...props}
    >
      {children}
    </p>
  );
};
