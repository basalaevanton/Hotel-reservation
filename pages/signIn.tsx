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
import { LoginForm } from '../components';

const SignIn: NextPage = () => {


  return (
    
   
   <LoginForm/>

    
  );
};

export default withLayout(SignIn);
