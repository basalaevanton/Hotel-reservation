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
} from '../componentsUI';

import type { NextPage } from 'next';
import 'normalize.css';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import db from '../lib/firebase';

const SignIn: NextPage = () => {
  const onSubmit = async () => {
    try {
      console.log('Document');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      login
      <button onClick={onSubmit}> send data</button>
    </div>
  );
};

export default withLayout(SignIn);
