import { RoomCardProps } from './RoomCard.props';
import styles from './RoomCard.module.scss';

import cn from 'classnames';
import React, { forwardRef, ForwardedRef } from 'react';
import { Button, Card, Htag, P, Rating } from '../../componentsUI';

import Flag from 'react-world-flags';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const RoomCard = forwardRef(
  (
    { room, className, ...props }: RoomCardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const router = useRouter();
    console.log(`${router.asPath}`);

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
        <div className={styles.roomImg}>
          <img src={room.images[0].url} alt={room.name} />
        </div>
        <div className={styles.roomInfo}>
          <Link
            href="/hotels/[hotel]/[room]"
            as={`${router.asPath}/${room.roomTypeId}`}
          >
            <a>
              <Htag tag="h2">{room.name}</Htag>
            </a>
          </Link>

          <P className={styles.roomDescription}>{room.description}</P>
          <div className={styles.roomBtn}>
            <Link
              href="/hotels/[hotel]/[room]"
              as={`${router.asPath}/${room.roomTypeId}`}
            >
              <a>
                <Button border="ghost">Подробнее о номере</Button>
              </a>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
);
