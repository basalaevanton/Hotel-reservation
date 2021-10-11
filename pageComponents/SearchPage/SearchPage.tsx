import React from 'react';

import { SearchPageProps } from './SearchPage.props';

import styles from './SearchPage.module.scss';
import { Button } from '../../componentsUI';

import { HotelCard } from '../../components';
import router, { useRouter } from 'next/router';

export const SearchPage = ({
  hotels,
  totalHotels,
  page,
}: SearchPageProps): JSX.Element => {
  const lastPage = Math.ceil(totalHotels / 10);

  const router = useRouter();
  const country = router.query.search;

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
          onClick={() => router.push(`/search/${country}?page=${page - 1}`)}
          unactive={page <= 1}
        >
          Previous
        </Button>

        <div className={styles.paginPages}>
          {page !== 1 && (
            <Button
              pagination="primary"
              onClick={() => router.push(`/search/${country}?page=${page - 1}`)}
            >
              {page - 1}
            </Button>
          )}
          <Button pagination="active">{page}</Button>
          <Button
            pagination="primary"
            onClick={() => router.push(`/search/${country}?page=${page + 1}`)}
          >
            {page + 1}
          </Button>
          . . .
          <Button
            pagination="primary"
            onClick={() => router.push(`/search/${country}?page=${lastPage}`)}
          >
            {lastPage}
          </Button>
        </div>
        <Button
          appearance="primary"
          arrow="right"
          onClick={() => router.push(`/search/${country}?page=${page + 1}`)}
          unactive={page >= lastPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
