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
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { HotelCard } from '../components';
import { HotelsPage } from '../pageComponents';
import { API } from '../helpers/api';

function Hotels({ hotels, pagination }: HotelsRoot): JSX.Element {
  console.log(pagination);

  return <HotelsPage hotels={hotels} />;
}

export default withLayout(Hotels);

// export const getStaticProps: GetStaticProps<HotelsRoot> = async () => {
//   const { data: hotels, data: pagination } = await axios.get(
//     API.HOST + '?size=2',
//     {
//       headers: {
//         'x-api-key': API.KEY,
//       },
//     }
//   );

//   return {
//     props: { hotels: hotels.data, pagination: pagination.pagination },
//   };
// };

export const getServerSideProps: GetServerSideProps<HotelsRoot> = async () => {
  const { data: hotels, data: pagination } = await axios.get(
    API.HOST + '?size=10',
    {
      headers: {
        'x-api-key': API.KEY,
      },
    }
  );

  return {
    props: { hotels: hotels.data, pagination: pagination.pagination },
  };
};
