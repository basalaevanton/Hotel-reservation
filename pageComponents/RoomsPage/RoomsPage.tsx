import React, { useEffect, useState } from 'react';

import { RoomsPageProps } from './RoomsPage.props';

import styles from './RoomsPage.module.scss';
import {
  Button,
  Htag,
  Input,
  Modal,
  RadioInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';
import { RoomCard } from '../../components';

export const RoomsPage = ({ hotel }: RoomsPageProps): JSX.Element => {
  console.log(hotel);

  return (
    <div className={styles.roomWrapper}>
      {hotel.roomTypes.map((room) => {
        return (
          <>
            <RoomCard key={room.roomTypeId} room={room} />;
          </>
        );
      })}
    </div>
  );
};
