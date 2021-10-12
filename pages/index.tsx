

import { NextPage } from 'next';
import 'normalize.css';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { IndexForm } from '../pageComponents';


const Home: NextPage = () => {
  return <IndexForm />;
};

export default withLayout(Home);
