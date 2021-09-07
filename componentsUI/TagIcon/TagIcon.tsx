import { TagIconProps, info } from './TagIcon.props';
import styles from './TagIcon.module.scss';

import cn from 'classnames';
import { P, Divider } from '../index';

export const TagIcon = ({
  appearance,

  className,
  ...props
}: TagIconProps): JSX.Element => {
  const Icon = info[appearance].icon;
  const Text = info[appearance].text;
  const Title = info[appearance].title;

  return (
    <div className={cn(styles.tagIcon, className)} {...props}>
      <div className={styles.content}>
        <Icon />
        <div className={styles.tagInfo}>
          <P bold>{Title}</P>
          <P>{Text}</P>
        </div>
      </div>
      <Divider />
    </div>
  );
};
