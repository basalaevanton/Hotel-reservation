import {  Htag, Marker } from '../../../componentsUI';
import type { GetServerSideProps,  } from 'next';
import 'normalize.css';
import React from 'react';
import { withLayout } from '../../../layout/Layout';
import { Hotels } from '../../../interfaces/hotels.interface';
import axios from 'axios';
import { API } from '../../../helpers/api';

import { useRouter } from 'next/router';

import GoogleMapReact from 'google-map-react';

const Search = ({ hotels, pagination }: Hotels): JSX.Element => {


  const router = useRouter();

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Htag tag="h2"> Отели на карте </Htag>
      <GoogleMapReact
        defaultZoom={7}
        defaultCenter={{
          lat: hotels[0].location.latitude,
          lng: hotels[0].location.longitude,
        }}
      >
        {hotels.map((hotel) => (
          <Marker
            key={hotel.hotelId}
            text={hotel.name}
            lat={hotel.location.latitude}
            lng={hotel.location.longitude}
            onClick={() => router.push('/hotels/' + hotel.hotelId)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default withLayout(Search);

export const getServerSideProps: GetServerSideProps<Hotels> = async ({
  query,
}) => {
  if (!query) {
    return {
      notFound: true,
    };
  }
  console.log(query);

  // страна для поиска
  const { data: hotels, data: pagination } = await axios.get(
    API.HOST +
      `?country[eq]=${query.map}&starRating[eq]=${query.rating}&size=500&`,

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
    },
  };
};
