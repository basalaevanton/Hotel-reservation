import React from 'react';

import { RoomsPageProps } from './RoomsPage.props';

import styles from './RoomsPage.module.scss';

import { RoomCard } from '../../components';

export const RoomsPage = ({ hotel }: RoomsPageProps): JSX.Element => {
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
