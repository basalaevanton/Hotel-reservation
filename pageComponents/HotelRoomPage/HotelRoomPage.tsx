import React, { useEffect, useState } from 'react';

import { HotelRoomPageProps } from './HotelRoomPage.props';

import styles from './HotelRoomPage.module.scss';
import {
  Button,
  Htag,
  Input,
  Modal,
  RadioInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';

export const HotelRoomPage = ({ room }: HotelRoomPageProps): JSX.Element => {
  return (
    <div className={styles.roomWrapper}>
      <Htag tag="h1">{room.name}</Htag>
      {room.images.map((img) => (
        <img src={img.url} />
      ))}
    </div>
  );
};
