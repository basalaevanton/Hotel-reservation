import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

import { useRouter } from 'next/router';

// import { Up } from '../components';

import cn from 'classnames';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const randomBackground = Math.floor(Math.random() * (5 - 1)) + 1;
  console.log(randomBackground);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperSidebar]: router.pathname === '/search',
      })}
    >
      <Header className={styles.header} />

      {router.pathname !== '/search' && (
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

      <Footer className={styles.footer} />
      {/* <Up /> */}
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
