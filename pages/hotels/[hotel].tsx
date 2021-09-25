import 'normalize.css';
import React from 'react';
import { withLayout } from '../../layout/Layout';

import axios from 'axios';
import { HotelRoot } from '../../interfaces/hotels.interface';
import { GetServerSideProps } from 'next';

import { RoomsPage } from '../../pageComponents';
import { API } from '../../helpers/api';

function Rooms({ hotel }: HotelRoot): JSX.Element {
  return <RoomsPage hotel={hotel} />;
}

export default withLayout(Rooms);

export const getServerSideProps: GetServerSideProps<HotelRoot> = async ({
  query,
}) => {
  if (!query) {
    return {
      notFound: true,
    };
  }

  const { data: hotel } = await axios.get(
    API.HOST + '/' + query.hotel,

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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await axios.get(
//     API.HOST + '?size=2',

//     {
//       headers: {
//         'x-api-key': API.KEY,
//       },
//     }
//   );
//   const hotels = data.data;
//   return {
//     paths: hotels.flatMap((h: { hotelId: string }) => '/hotels/' + h.hotelId),
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<HotelRoot> = async ({ params }) => {
//   if (!params) {
//     return {
//       notFound: true,
//     };
//   }

//   const { data: hotel } = await axios.get(
//     API.HOST + '/' + params.rooms,

//     {
//       headers: {
//         'x-api-key': API.KEY,
//       },
//     }
//   );

//   return {
//     props: { hotel: hotel },
//   };
// };
