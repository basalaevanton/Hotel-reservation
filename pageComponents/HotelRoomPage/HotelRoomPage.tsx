import React, { useEffect, useState } from 'react';

import { HotelRoomPageProps } from './HotelRoomPage.props';

import styles from './HotelRoomPage.module.scss';
import {
  Button,
  Card,
  Divider,
  Htag,
  Input,
  Modal,
  P,
  RadioInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';
import { declOfNum } from '../../helpers/helpers';
import { Rate } from '../../interfaces/ratePlanes.inteface';

import { useActions, useTypedSelector, useAuthListener } from '../../hooks';
import { useRouter } from 'next/router';
import { myRatePlane } from '../../pages/hotels/[hotel]/[hotelRoom]';
import { BookingModal } from './HotelRoom.intrerface';
import { BookingForm } from '../../components';

export const HotelRoomPage = ({
  room,
  ratePlans,
}: HotelRoomPageProps): JSX.Element => {
  const { showModalBooking } = useTypedSelector((state) => state.ui);
  const { openModalBooking, closeModalBooking } = useActions();
  const user = useAuthListener();
  const router = useRouter();
  const hotelId = router.asPath.split('/')[2];

  const [bookingPlan, setBookingPlan] = useState<BookingModal>();
  const booking = (plan: Rate, rate: myRatePlane) => {
    openModalBooking();
    setBookingPlan({ ...plan, ...rate, hotelId });
  };

  return (
    <div className={styles.roomWrapper}>
      {user ? (
        <Modal
          showModal={showModalBooking}
          closeModal={() => closeModalBooking()}
        >
          {bookingPlan && <BookingForm ratePlan={bookingPlan} />}
        </Modal>
      ) : (
        <Modal
          showModal={showModalBooking}
          closeModal={() => closeModalBooking()}
        >
          <Button appearance="primary" onClick={() => router.push('/signIn')}>
            {' '}
            Войдите{' '}
          </Button>
          или
          <Button
            appearance="primary"
            onClick={() => router.push('/registration')}
          >
            {' '}
            Зарегестрируйтесь{' '}
          </Button>
          для дальньйшего бронирования.
        </Modal>
      )}

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
          <Divider />
          <P>{room.description}</P>
          <Divider />
          <Htag tag="h3">Вместительность:</Htag>
          <P>
            {room.maxOccupancy} {declOfNum(33, ['гость', 'гостя', 'гостей'])}
          </P>
          <Divider />
          <Htag tag="h3">Удобства номера:</Htag>
          {room.amenities.map((el) => (
            <div key={el.code}>{el.formatted}</div>
          ))}
        </Card>
        <div className={styles.roomRate}>
          {ratePlans.map((plan) =>
            plan.roomTypes?.dates
              ?.find((date) => date.closed == false)
              ?.rates.map((rate, id) => (
                <Card key={id} type="room">
                  <Htag tag="h1">{plan.desription} </Htag>
                  <Htag tag="h2">прайс для {rate.adults} человек</Htag>
                  <P>комнат в номере {rate.roomsSellable}</P>
                  <P>
                    {' '}
                    цена номера {rate.retailRate.amount / 100}{' '}
                    {rate.retailRate.currency.code}
                  </P>
                  <Button
                    appearance="ghost"
                    onClick={() => booking(rate, plan)}
                  >
                    забронировать номер
                  </Button>
                </Card>
              ))
          )}
        </div>
      </section>
    </div>
  );
};
