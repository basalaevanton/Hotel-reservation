import React from 'react';

import { HotelsPageProps } from './HotelsPage.props';

import styles from './HotelsPage.module.scss';
import {
  Button,

} from '../../componentsUI';

import { HotelCard } from '../../components';
import router from 'next/router';

export const HotelsPage = ({
  hotels,
  totalHotels,
  page,
}: HotelsPageProps): JSX.Element => {
  const lastPage = Math.ceil(totalHotels / 10);

  return (
    <div className={styles.hotelswrapper}>
      <div className={styles.hotelsCards}>
        {hotels.map((hotel) => {
          return <HotelCard key={hotel.hotelId} hotel={hotel} />;
        })}
      </div>
      <div className={styles.hotelsPagination}>
        <Button
          appearance="primary"
          // arrow="left"
          onClick={() => router.push(`/hotels?page=${page - 1}`)}
          unactive={page <= 1}
        >
          Previous
        </Button>
        <div className={styles.paginPages}>
          {page !== 1 && (
            <Button
              pagination="primary"
              onClick={() => router.push(`/hotels?page=${page - 1}`)}
            >
              {page - 1}
            </Button>
          )}
          <Button pagination="active">{page}</Button>
          <Button
            pagination="primary"
            onClick={() => router.push(`/hotels?page=${page + 1}`)}
          >
            {page + 1}
          </Button>
          . . .
          <Button
            pagination="primary"
            onClick={() => router.push(`/hotels?page=${lastPage}`)}
          >
            {lastPage}
          </Button>
        </div>
        <Button
          appearance="primary"
          arrow="right"
          onClick={() => router.push(`/hotels?page=${page + 1}`)}
          unactive={page >= lastPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
