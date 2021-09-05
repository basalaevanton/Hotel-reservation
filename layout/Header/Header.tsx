import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import Logo from './logo.svg';

import cn from 'classnames';

import Link from 'next/link';

import { ButtonIcon, Button, Accordion } from '../../components';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [user, setUser] = useState('');

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/">
            <a>О&nbsp;нас</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Accordion title="Услуги">
            <ul>
              <li className={styles.accordionItem}>
                <Link href="/">
                  <a>Услуга 1</a>
                </Link>
              </li>
              <li className={styles.accordionItem}>
                <Link href="/">
                  <a>Услуга 2</a>
                </Link>
              </li>
              <li className={styles.accordionItem}>
                <Link href="/">
                  <a>Услуга 3</a>
                </Link>
              </li>
            </ul>
          </Accordion>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            <a>Вакансии</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/">
            <a>Новости</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Accordion title="Соглашения">
            <ul>
              <li className={styles.accordionItem}>
                <Link href="/">
                  <a>Соглашениe 1</a>
                </Link>
              </li>
              <li className={styles.accordionItem}>
                <Link href="/">
                  <a>Соглашениe 2</a>
                </Link>
              </li>
              <li className={styles.accordionItem}>
                <Link href="/">
                  <a>Соглашениe 3</a>
                </Link>
              </li>
            </ul>
          </Accordion>
        </li>
        {user ? (
          <p className={styles.user}>{user}</p>
        ) : (
          <>
            <li className={styles.menuItem}>
              <Link href="/signIn">
                <a>
                  <Button border="primary">Войти</Button>
                </a>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/registration">
                <a>
                  <Button appearance="primary">Зарегестрироваться</Button>
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
