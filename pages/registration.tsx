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
import { RegistrationForm } from '../pageComponents';

const Registration: NextPage = () => {
  return (
    
      <RegistrationForm />
   
  );
};

export default withLayout(Registration);
