import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import ArrowIcon from './arrow.svg';

import cn from 'classnames';

export const Button = ({
  children,
  appearance,
  border,
  pagination,
  unactive = false,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',

        [styles.primaryBorder]: border == 'primary',
        [styles.ghostBorder]: border == 'ghost',

        [styles.primaryPagination]: pagination == 'primary',
        [styles.activePagination]: pagination == 'active',
        

        [styles.unactive]: unactive == true,
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.right]: arrow == 'right',
          })}
        />
      )}
    </button>
  );
};
