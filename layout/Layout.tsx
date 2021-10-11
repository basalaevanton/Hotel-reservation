import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

import React, { FunctionComponent, useEffect } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { Up } from '../componentsUI';

import { useRouter } from 'next/router';

import cn from 'classnames';
import { useAuthListener } from '../hooks';

import { getAuth, signOut } from 'firebase/auth';
import { doc, getDoc, getDocFromCache } from 'firebase/firestore';
import db from '../lib/firebase';
import { SidebarSearch } from './SidebarSearch/SidebarSearch';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  // eslint-disable-next-line prefer-const
  let randomBackground = Math.floor(Math.random() * (5 - 1)) + 1;
  // const randomBackground = 1;

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperSidebar]: router.pathname === '/search',
        // ||          router.pathname === '/search/[search]',
      })}
    >
      <Header className={styles.header} />

      {router.pathname !== '/hotels/[hotel]/[hotelRoom]' &&
        router.pathname !== '/search' &&
        router.pathname !== '/search/map/[map]' &&
        router.pathname !== '/search/[search]' && (
          <div
            className={cn(styles.body, {
              [styles.background1]: randomBackground == 1,
              [styles.background2]: randomBackground == 2,
              [styles.background3]: randomBackground == 3,
              [styles.background4]: randomBackground == 4,
            })}
          >
            {children}
          </div>
        )}

      {router.pathname === '/search' && (
        <>
          <Sidebar className={styles.sidebar} />
          <div className={styles.body}>{children}</div>
        </>
      )}

      {router.pathname === '/search/[search]' && (
        <>
          {/* <SidebarSearch className={styles.sidebar} /> */}
          <div className={styles.body}>{children}</div>
        </>
      )}

      {(router.pathname === '/hotels/[hotel]/[hotelRoom]' ||
        router.pathname === '/search/map/[map]') && (
        <>
          <div className={styles.body}>{children}</div>
        </>
      )}
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
