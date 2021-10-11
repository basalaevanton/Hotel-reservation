// import type { NextPage } from 'next';
import { HotelsRoot } from '../interfaces/hotels.interface';
import { GetServerSideProps, NextPage } from 'next';
import 'normalize.css';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { IndexForm } from '../pageComponents';
import { wrapper } from '../store';
import { getHotels } from '../store/action-creators/hotels';

const Home: NextPage = () => {
  return <IndexForm />;
};

export default withLayout(Home);
