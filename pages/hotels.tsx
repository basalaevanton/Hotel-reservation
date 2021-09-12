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

import { useActions, useTypedSelector } from '../hooks';
import axios from 'axios';

const Hotels: NextPage = () => {
  // useEffect(() => {
  //   try {
  //     axios({
  //       method: 'get',
  //       url: 'https://sandbox.impala.travel/v1/hotels',
  //       headers: {
  //         'x-api-key': 'sandb_YrV4L6IgNyrbsyuHwmAbgPmcUkjznr7W9Oa325a3',
  //       },
  //     }).then(function (response) {
  //       // handle success
  //       console.log(response);
  //     });
  //   } catch (e: any) {
  //     console.log(e);
  //   }
  // }, []);

  return <div></div>;
};

export default withLayout(Hotels);
