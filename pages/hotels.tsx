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
import { HotelsRoot } from '../interfaces/hotels.interface';
import { GetStaticProps, NextPage } from 'next';

function Hotels({ hotels, pagination }: HotelsRoot): JSX.Element {
  console.log(hotels);
  console.log(pagination);

  return (
    <div>
      {hotels.map((id) => {
        return <div key={id.hotelId}>{id.name}</div>;
      })}
    </div>
  );
}

export default withLayout(Hotels);

export const getStaticProps: GetStaticProps<HotelsRoot> = async () => {
  const { data: hotels, data: pagination } = await axios.get(
    'https://sandbox.impala.travel/v1/hotels?size=100',
    {
      headers: {
        'x-api-key': 'sandb_YrV4L6IgNyrbsyuHwmAbgPmcUkjznr7W9Oa325a3',
      },
    }
  );

  return {
    props: { hotels: hotels.data, pagination: pagination.pagination },
  };
};

