import React, { useEffect, useState } from 'react';

import { HotelRoomPageProps } from './HotelRoomPage.props';

import styles from './HotelRoomPage.module.scss';
import {
  Button,
  Card,
  Htag,
  Input,
  Modal,
  P,
  RadioInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';
import { declOfNum } from '../../helpers/helpers';

export const HotelRoomPage = ({
  room,
  ratePlans,
}: HotelRoomPageProps): JSX.Element => {
 

  return (
    <div className={styles.roomWrapper}>
      <div className={styles.imageWrapper}>
        <img src={room.images[0]?.url} />
        <div className={styles.imageMini}>
          <img src={room.images[1]?.url} />
          <img src={room.images[2]?.url} />
        </div>
      </div>
      <section className={styles.roomInfo}>
        <Card type="room">
          <Htag tag="h1">{room.name}</Htag>
          <P>{room.description}</P>
          <P>
            Вместительность: {room.maxOccupancy}{' '}
            {declOfNum(33, ['гость', 'гостя', 'гостей'])}
          </P>
          {room.amenities.map((el) => (
            <div key={el.code}>{el.formatted}</div>
          ))}
        </Card>
        {ratePlans.map((plan) => (
          <Card type="room">
            <Htag tag="h1">{plan.desription}</Htag>
            <P>{plan.roomTypes?.name}</P>
            <P>{plan.roomTypes?.maxOccupancy}</P>
          </Card>
        ))}
      </section>
    </div>
  );
};
