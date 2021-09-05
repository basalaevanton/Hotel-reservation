import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';

import cn from 'classnames';

import Logo from '../logo.svg';
import { ButtonIcon } from '../../components';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {



  return (
    <header className={cn(className, styles.header)} {...props}>
      header
    </header>
  );
};
