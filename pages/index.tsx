// import type { NextPage } from 'next';
import { HotelsRoot } from '../interfaces/hotels.interface';
import { GetServerSideProps } from 'next';
import 'normalize.css';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { IndexForm } from '../pageComponents';
import { wrapper } from '../store';
import { getHotels } from '../store/action-creators/hotels';

function Home({ hotels, pagination, page }: HotelsRoot): JSX.Element {
  console.log(hotels);
  return <IndexForm />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async ({ store }) => {
    await store.dispatch(getHotels());

    return {
      props: {
        hotels: store.getState().hotels.hotels,
        pagination: store.getState().hotels.hotels,
        page: '',
      },
    };
  });

export default withLayout(Home);
