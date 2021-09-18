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
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { IndexForm } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <IndexForm />
    </div>
  );
};

export default withLayout(Home);
