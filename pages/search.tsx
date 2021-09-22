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
import type { GetStaticProps, NextPage } from 'next';
import 'normalize.css';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';

import { useActions, useTypedSelector } from '../hooks';
import axios from 'axios';
import { HotelsRoot } from '../interfaces/hotels.interface';

const Search: NextPage = () => {

  
  return (
    <div>
      <Htag tag="h1">Номера, которые мы для вас подобрали</Htag>
    </div>
  );
};

export default withLayout(Search);



