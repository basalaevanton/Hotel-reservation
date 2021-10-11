import { HeaderMenuProps } from './HeaderMenu.props';
import styles from './HeaderMenu.module.scss';

import cn from 'classnames';

import Link from 'next/link';

import { Button, Accordion, Htag } from '../../../componentsUI';

import React, { useEffect } from 'react';

import { useAuthListener } from '../../../hooks';

import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export const HeaderMenu = ({
  className,
  ...props
}: HeaderMenuProps): JSX.Element => {
  // const [user, SetUser] = useState();

  const user = useAuthListener();
  const router = useRouter();

  const SignOutUser = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      // Sign-out successful.
      return router.push('/');
    });
  };

  return (
    <ul className={cn(className, styles.menu)} {...props}>
      <li className={styles.menuItem}>
        <Link href="/hotels">
          <a>Отели</a>
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link href="/components">
          <a>Компоненты</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/search">
          <a>Поиск</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Accordion title="Услуги" className={styles.headerAccordion}>
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
        <Accordion title="Соглашения" className={styles.headerAccordion}>
          <ul>
            <li className={styles.accordionItem}>
              <Link href="/">
                <a>Соглашениe&nbsp;1</a>
              </Link>
            </li>
            <li className={styles.accordionItem}>
              <Link href="/">
                <a>Соглашениe&nbsp;2</a>
              </Link>
            </li>
            <li className={styles.accordionItem}>
              <Link href="/">
                <a>Соглашениe&nbsp;3</a>
              </Link>
            </li>
          </ul>
        </Accordion>
      </li>
      {user ? (
        <Htag className={styles.user} tag="h2">
          <Link href="/user">
            <a> {user.email}</a>
          </Link>

          <Button appearance="primary" onClick={SignOutUser}>
            Выйти
          </Button>
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
