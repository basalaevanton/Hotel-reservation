import { Button, Htag } from '../../componentsUI';
import type { GetServerSideProps,  } from 'next';
import 'normalize.css';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import { HotelsRoot } from '../../interfaces/hotels.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { SearchPage } from '../../pageComponents';

import { useRouter } from 'next/router';

const Search = ({ hotels, pagination, page }: HotelsRoot): JSX.Element => {
  const totalHotels = pagination.total;

  const router = useRouter();


  return (
    <div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Htag tag="h1">Отели, которые мы для вас подобрали</Htag>
        <Button
          appearance="primary"
          // router.push('search/' + data.country.code + '?rating=' + data.rating);
          onClick={() =>
            router.push(
              'map/' + router.query.search + '?rating=' + router.query.rating
            )
          }
        >
          Посмотреть на карте
        </Button>
      </div>
      <SearchPage hotels={hotels} page={page} totalHotels={totalHotels} />;
    </div>
  );
};

export default withLayout(Search);

export const getServerSideProps: GetServerSideProps<HotelsRoot> = async ({
  query,
  query: { page = 1 },
}) => {
  if (!query) {
    return {
      notFound: true,
    };
  }

  const start = +page === 1 ? 0 : (+page - 1) * 10;

  // страна для поиска
  const { data: hotels, data: pagination } = await axios.get(
    API.HOST +
      `?country[eq]=${query.search}&starRating[eq]=${query.rating}&size=10&offset=${start}`,

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
