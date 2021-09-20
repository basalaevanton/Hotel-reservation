import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';

import cn from 'classnames';
import React from 'react';
import { SidebarSearchForm } from '../../components';
export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <SidebarSearchForm />
    </div>
  );
};
