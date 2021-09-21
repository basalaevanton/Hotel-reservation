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

import 'normalize.css';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../layout/Layout';

import { useActions, useTypedSelector } from '../hooks';
import axios from 'axios';
import { Datum, HotelRoot } from '../interfaces/hotels.interface';
import { GetStaticProps, NextPage } from 'next';
import { HotelCard } from '../components';

function Hotel({ hotel }: HotelRoot): JSX.Element {
  

  return (
    <div>
      <HotelCard hotel={hotel} />
    </div>
  );
}

export default withLayout(Hotel);

export const getStaticProps: GetStaticProps<HotelRoot> = async () => {
  const { data: hotels } = await axios.get(
    'https://sandbox.impala.travel/v1/hotels/f63b534a-d39d-4199-ba47-32650695102b',
    {
      headers: {
        'x-api-key': 'sandb_YrV4L6IgNyrbsyuHwmAbgPmcUkjznr7W9Oa325a3',
      },
    }
  );

  return {
    props: { hotel: hotels },
  };
};
