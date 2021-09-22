import { RoomCardProps } from './RoomCard.props';
import styles from './RoomCard.module.scss';

import cn from 'classnames';
import React, { forwardRef, ForwardedRef } from 'react';
import { Card, Htag, P, Rating } from '../../componentsUI';

import Flag from 'react-world-flags';

export const RoomCard = forwardRef(
  (
    { room, className, ...props }: RoomCardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    // let hotelImg = 'https://via.placeholder.com/380x240';
    // room.images.map((img) => {
    //   return img. == true ? (hotelImg = img.url) : hotelImg;
    // });
    return (
      <Card
        className={cn(className, styles.roomCard)}
        type="room"
        {...props}
        ref={ref}
      >
        <Htag tag="h2">{room.name}</Htag>

        <P className={styles.roomDescription}>{room.description}</P>
      </Card>
    );
  }
);
