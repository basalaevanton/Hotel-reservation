import 'normalize.css';
import React from 'react';
import { withLayout } from '../../layout/Layout';

import axios from 'axios';
import { HotelsRoot } from '../../interfaces/hotels.interface';
import { GetServerSideProps } from 'next';

import { HotelsPage } from '../../pageComponents';
import { API } from '../../helpers/api';

function Hotels({ hotels, pagination, page }: HotelsRoot): JSX.Element {
  const totalHotels = pagination.total;

  return <HotelsPage hotels={hotels} page={page} totalHotels={totalHotels} />;
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

export const getServerSideProps: GetServerSideProps<HotelsRoot> = async ({
  query: { page = 1 },
}) => {
  const start = +page === 1 ? 0 : (+page - 1) * 10;

  const { data: hotels, data: pagination } = await axios.get(
    API.HOST + `?size=10&offset=${start}`,
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
