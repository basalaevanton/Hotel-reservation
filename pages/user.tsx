import {
  Button,
  Htag,
  P,
  Input,
  ButtonIcon,
  TagIcon,
  Rating,
  Checkbox,
  RadioInput,
  Switch,
  RangeInput,
  Accordion,
  Dropdown,
  Modal,
} from '../componentsUI';
import type { NextPage } from 'next';
import 'normalize.css';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../layout/Layout';

import { UserInfo } from '../hooks';

import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const User: NextPage = () => {
  const userInfo = UserInfo();
  const router = useRouter();

  const SignOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      router.push('/');
    });
  };

  return (
    <div>
      {userInfo && (
        <div>
          <Htag tag="h2">{userInfo.name}</Htag>
          <Htag tag="h2">{userInfo.lastname}</Htag>
          <Htag tag="h2">{userInfo.gender}</Htag>
          <Htag tag="h2">{userInfo.email}</Htag>
          <Button appearance="primary" onClick={() => SignOutUser()}>
            sign out
          </Button>
        </div>
      )}
    </div>
  );
};

export default withLayout(User);
