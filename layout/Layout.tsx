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
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperSidebar]: router.pathname === '/search',
      })}
    >
      <Header className={styles.header} />

      {router.pathname === '/search' && <Sidebar className={styles.sidebar} />}
      <div className={styles.body}>{children}</div>
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
