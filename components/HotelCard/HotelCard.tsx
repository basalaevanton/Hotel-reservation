import { HotelCardProps } from './HotelCard.props';
import styles from './HotelCard.module.scss';

import cn from 'classnames';
import React, { forwardRef, ForwardedRef } from 'react';
import { Card, Htag, P, Rating } from '../../componentsUI';

import Flag from 'react-world-flags';
import Link from 'next/link';

export const HotelCard = forwardRef(
  (
    { hotel, className, ...props }: HotelCardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    let hotelImg = 'https://via.placeholder.com/380x240';
    hotel.images.map((img) => {
      return img.isHeroImage == true ? (hotelImg = img.url) : hotelImg;
    });
    return (
      <Card
        className={cn(className, styles.hotelCard)}
        type="hotel"
        {...props}
        ref={ref}
      >
        <div className={styles.hotel}>
          <div className={styles.hotelImg}>
            <img src={hotelImg} alt={hotel.name} />
          </div>

          <div className={styles.hotelInfo}>
            <Link href={`/hotels/${encodeURIComponent(hotel.hotelId)}`}>
              <a>
                <Htag tag="h2">{hotel.name}</Htag>
              </a>
            </Link>

            <Htag tag="h3">
              <Flag code={hotel.address.country} height="16" />{' '}
              {hotel.address.countryName}, {hotel.address.city}
            </Htag>
            <Rating rating={hotel.starRating} />
            <P>Phone: {hotel.phoneNumbers}</P>
            <P> currency: {hotel.currency}</P>
          </div>
        </div>
        <P className={styles.hotelDescription}>{hotel.description.short}</P>
      </Card>
    );
  }
);
