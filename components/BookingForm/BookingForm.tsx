import React, { useState } from 'react';
import { BookingFormProps } from './BookingForm.props';
import styles from './BookingForm.module.scss';
import { Input, Htag, P, Button } from '../../componentsUI';

import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedTextInput from 'react-text-mask';

import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import db from '../../lib/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
} from 'firebase/auth';
import { useActions } from '../../hooks';

export const BookingForm = ({
  ratePlan,
  ...props
}: BookingFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(ratePlan);

  const { openModalBooking, closeModalBooking } = useActions();

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const nights = (Number(endDate) - Number(startDate)) / 24 / 3600 / 1000;

  const onSubmit = async () => {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          addDoc(collection(db, 'booking', user.uid, ratePlan.hotelId), {
            typeBooking: ratePlan.desription,
            hotelId: ratePlan.hotelId,
            roomId: ratePlan.roomTypes?.roomTypeId,
            roomName: ratePlan.roomTypes?.name,
            startDate: startDate,
            endDate: endDate,
            adults: ratePlan.adults,
            total:
              ((ratePlan.retailRate.amount / 100) * nights).toFixed(2) +
              ratePlan.retailRate.currency.code,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }

    closeModalBooking();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      <Htag tag="h2">тип бронирования: {ratePlan.desription}</Htag>
      <P>название номера: {ratePlan.roomTypes?.name}</P>
      <div>
        <P>Дата въезда:</P>
        <DatePicker
          className={styles.datePicker}
          selected={startDate}
          dateFormat="dd/MM/yyyy"
          onChange={(date: any) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={
            <MaskedTextInput
              type="text"
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
            />
          }
        />
      </div>
      <div>
        <P>Дата Отъезда:</P>
        <DatePicker
          className={styles.datePicker}
          selected={endDate}
          dateFormat="dd/MM/yyyy"
          onChange={(date: any) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={
            <MaskedTextInput
              type="text"
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
            />
          }
        />
      </div>
      <P>Колличество ночей: {nights}</P>
      <P>Количество человек: {ratePlan.adults}</P>
      <P>
        Цена за одну ночь: {ratePlan.retailRate.amount / 100}{' '}
        {ratePlan.retailRate.currency.code}
      </P>
      <P>
        Итого: {((ratePlan.retailRate.amount / 100) * nights).toFixed(2)}{' '}
        {ratePlan.retailRate.currency.code}
      </P>
      <Button border="primary">Забронировать</Button>
    </form>
  );
};
