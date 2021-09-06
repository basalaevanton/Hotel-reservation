import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import Logo from '../logo.svg';

import cn from 'classnames';

import Link from 'next/link';

import { ButtonIcon } from '../../components';
import { motion } from 'framer-motion';

import React, { useState } from 'react';

import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { useIsMedium } from '../../hooks/mediaQueries';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const isMedium = useIsMedium();

  const variants = !isMedium
    ? {
        opened: {
          opacity: 1,
          height: 'auto',
          x: 0,
          transition: { stiffness: 20 },
          display: 'flex',
        },
        closed: {
          opacity: 1,
          x: 0,
        },
      }
    : {
        opened: {
          opacity: 1,
          height: 'auto',
          x: 0,
          transition: { stiffness: 20 },
          display: 'flex',
        },
        closed: {
          opacity: 0,
          height: 0,
          x: '100%',
          transitionEnd: {
            display: 'none',
          },
        },
      };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>

      <motion.nav
        className={cn(styles.mobileMenu, {
          // [styles.open]: isOpened,
        })}
        variants={variants}
        initial={'opened'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <HeaderMenu />
      </motion.nav>

      {isOpened ? (
        <ButtonIcon
          className={styles.menuClose}
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      ) : (
        <ButtonIcon
          className={styles.menuIcon}
          icon="menu"
          onClick={() => setIsOpened(true)}
        />
      )}
    </header>
  );
};
