import { ButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.scss';

import cn from 'classnames';

export const ButtonIcon = ({
  icon,
  className,
  children,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.like]: icon == 'like',
        [styles.pagination]: icon == 'arrow',
        [styles.up]: icon == 'up',
      })}
      {...props}
    >
      <IconComp />
      {children}
    </button>
  );
};
