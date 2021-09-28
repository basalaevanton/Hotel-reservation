import { Htag } from '../componentsUI';
import type { GetServerSideProps, NextPage } from 'next';
import 'normalize.css';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { HotelsRoot } from '../interfaces/hotels.interface';
import axios from 'axios';
import { API } from '../helpers/api';
import { HotelsPage } from '../pageComponents';
import { useTypedSelector } from '../hooks';

const Search = ({ hotels, pagination, page }: HotelsRoot): JSX.Element => {
  const totalHotels = pagination.total;
  return (
    <div>
      <Htag tag="h1">Номера, которые мы для вас подобрали</Htag>
      <HotelsPage hotels={hotels} page={page} totalHotels={totalHotels} />;
    </div>
  );
};

export default withLayout(Search);

export const getServerSideProps: GetServerSideProps<HotelsRoot> = async ({
  query: { page = 1 },
}) => {
  const start = +page === 1 ? 0 : (+page - 1) * 10;
 // страна для поиска
  const GBR = 'GBR';
  const { data: hotels, data: pagination } = await axios.get(
    API.HOST + `?country%5Beq%5D=${GBR}&size=10&offset=${start}`,

    {
      headers: {
        'x-api-key': API.KEY,
      },
    }
  );

  return {
    props: {
      hotels: hotels.data,
      pagination: pagination.pagination,
      page: +page,
    },
  };
};
