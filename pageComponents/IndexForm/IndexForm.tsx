import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IndexFormProps } from './IndexForm.props';
import { searchIndexForm } from './searchIndexForm.intrerface';

import styles from './IndexForm.module.scss';
import {
  Accordion,
  Button,
  Card,
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

import countries from 'i18n-iso-countries';
import { useRouter } from 'next/router';
// eslint-disable-next-line @typescript-eslint/no-var-requires
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
// eslint-disable-next-line @typescript-eslint/no-var-requires
countries.registerLocale(require('i18n-iso-countries/langs/ru.json'));

import ReactSelect from 'react-select';
import { countriesData } from '../../helpers/countryData';

export const IndexForm = ({ ...props }: IndexFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [country, setCountry] = useState(null);

  const router = useRouter();

  const handleChange = (data: any) => {
    data.country?.code !== undefined &&
      router.push('search/' + data.country.code);
  };

  return (
    <Card type="index" className={styles.index}>
      <Htag tag="h1">Подберем отели по стране</Htag>

      <form
        className={styles.indexForm}
        onSubmit={handleSubmit(handleChange)}
        {...props}
      >
        <section>
          {/* <label>Выберите страну</label> */}
          <Controller
            name="country"
            control={control}
            rules={{
              required: { value: true, message: 'Укажите страну' },
            }}
            render={({ field }) => (
              <ReactSelect
                {...field}
                className={styles.reactSelect}
                options={countriesData}
                placeholder="Введите страну"
              />
            )}
          />

        <span className={styles.errorSearch}>{errors.country?.message}</span>
        </section>

        <Button className={styles.indexBtn} border="primary">
          Найти
        </Button>


      </form>
    </Card>
  );
};
