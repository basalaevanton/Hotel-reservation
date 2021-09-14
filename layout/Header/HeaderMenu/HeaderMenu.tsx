import { HeaderMenuProps } from './HeaderMenu.props';
import styles from './HeaderMenu.module.scss';
import Logo from './logo.svg';

import cn from 'classnames';

import Link from 'next/link';

import { Button, Accordion, Htag } from '../../../componentsUI';

import React, { useState } from 'react';

export const HeaderMenu = ({
  className,
  ...props
}: HeaderMenuProps): JSX.Element => {
  const [user, setUser] = useState('');

  return (
    <ul className={cn(className, styles.menu)} {...props}>
      <li className={styles.menuItem}>
        <Link href="/hotels">
          <a>О&nbsp;нас</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Accordion title="Услуги">
          <ul>
            <li className={styles.accordionItem}>
              <Link href="/search">
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
        <Htag className={styles.user} tag="h2">
          {user}
        </Htag>
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
  );
};
