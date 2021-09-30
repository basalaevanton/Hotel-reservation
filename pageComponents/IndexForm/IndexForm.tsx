import React, { useEffect, useRef, useState } from 'react';
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
    console.log(data);
    data.country?.code !== undefined &&
      router.push('search/' + data.country.code);
  };

  return (
    <div className={styles.indexForm}>
      <Htag tag="h1">Найдём номера под ваши пожелания</Htag>

      <form onSubmit={handleSubmit(handleChange)} {...props}>
        <section>
          <label>Выберите страну</label>
          <Input
            value="GBR"
            {...register('country2', {
              // required: { value: true, message: 'Заполните имя' },
            })}
          />
        </section>

        <section>
          <label>React Select</label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <ReactSelect {...field} options={countriesData} />
            )}
          />
        </section>

        <Button border="primary">Найти отели по стране</Button>
      </form>
    </div>
  );
};
