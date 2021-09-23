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
} from '../../componentsUI';

import 'normalize.css';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../layout/Layout';

import { useActions, useTypedSelector } from '../../hooks';
import axios from 'axios';
import { Datum, HotelRoot } from '../../interfaces/hotels.interface';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { HotelCard } from '../../components';
import { RoomsPage } from '../../pageComponents';
import { API } from '../../helpers/api';

function Rooms({ hotel }: HotelRoot): JSX.Element {
  

  return (
    <div>
      <RoomsPage hotel={hotel} />
    </div>
  );
}

export default withLayout(Rooms);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(
    API.HOST + '?size=2',

    {
      headers: {
        'x-api-key': API.KEY,
      },
    }
  );
  const hotels = data.data;
  return {
    paths: hotels.flatMap((h: { hotelId: string }) => '/hotels/' + h.hotelId),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HotelRoot> = async ({ params }) => {
  
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: hotel } = await axios.get(
    API.HOST + '/' + params.rooms,

    {
      headers: {
        'x-api-key': API.KEY,
      },
    }
  );

  return {
    props: { hotel: hotel },
  };
};
