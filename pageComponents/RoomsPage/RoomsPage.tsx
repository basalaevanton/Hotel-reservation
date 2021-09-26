import React from 'react';

import { RoomsPageProps } from './RoomsPage.props';

import styles from './RoomsPage.module.scss';

import { RoomCard } from '../../components';
import { RoomType } from '../../interfaces/hotels.interface';

export const RoomsPage = ({ hotel }: RoomsPageProps): JSX.Element => {
  return (
    <div className={styles.roomWrapper}>
      {hotel.roomTypes.map((room: RoomType) => {
        return (
          <div>
            <RoomCard key={room.roomTypeId} room={room} />;
          </div>
        );
      })}
    </div>
  );
};
