import { Htag } from '../componentsUI';
import type { NextPage } from 'next';
import 'normalize.css';
import React from 'react';
import { withLayout } from '../layout/Layout';

const Search: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">Номера, которые мы для вас подобрали</Htag>
    </div>
  );
};

export default withLayout(Search);
