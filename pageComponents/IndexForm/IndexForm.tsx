import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IndexFormProps } from './IndexForm.props';
import { searchIndexForm } from './searchIndexForm.intrerface';

import styles from './IndexForm.module.scss';
import {
  Accordion,
  Button,
  Dropdown,
  Htag,
  Input,
  Modal,
  RadioInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';

import { Controller, useForm } from 'react-hook-form';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedTextInput from 'react-text-mask';

import { useTypedSelector, useActions } from '../../hooks';

export const IndexForm = ({ ...props }: IndexFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<searchIndexForm>();
  //
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  //
  const [isSuccess, setIsSuccess] = useState<string>('');
  const [error, setIsError] = useState<string>('');

  const onSubmit = (data: searchIndexForm) => {
    console.log(data);
  };

  return (
    <div className={styles.indexForm}>
      <Htag tag="h1">Найдём номера под ваши пожелания</Htag>
      <form onSubmit={handleSubmit(onSubmit)} {...props}></form>
    </div>
  );
};
