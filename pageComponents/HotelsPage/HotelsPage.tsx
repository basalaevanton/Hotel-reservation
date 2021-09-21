import React, { useEffect, useState } from 'react';

import { HotelsPageProps } from './HotelsPage.props';

import styles from './HotelsPage.module.scss';
import {
  Button,
  Htag,
  Input,
  Modal,
  RadioInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';
import { HotelCard } from '../../components';

export const HotelsPage = ({ hotels }: HotelsPageProps): JSX.Element => {
  return (
    <div className={styles.hotelswrapper}>
      {hotels.map((hotel) => {
        return <HotelCard key={hotel.hotelId} hotel={hotel} />;
      })}
    </div>
  );
};
