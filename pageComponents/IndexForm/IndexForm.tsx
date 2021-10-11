import React, { useState } from 'react';

import { IndexFormProps } from './IndexForm.props';

import styles from './IndexForm.module.scss';
import { Rating, Button, Card, Htag, Divider } from '../../componentsUI';

import cn from 'classnames';

import { Controller, useForm } from 'react-hook-form';

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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [rating, setRating] = useState<number>(3);

  const router = useRouter();

  const handleChange = (data: any) => {
    data.rating = rating;

    data.country?.code !== undefined &&
      router.push('search/' + data.country.code + '?rating=' + data.rating);
  };

  return (
    <Card type="index" className={styles.index}>
      <Htag tag="h1">Подберем отели по стране</Htag>

      <form
        className={styles.indexForm}
        onSubmit={handleSubmit(handleChange)}
        {...props}
      >
        <div className={styles.indexInputs}>
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

            <span className={styles.errorSearch}>
              {errors.country?.message}
            </span>
          </section>
          <Divider />
          <section style={{ display: 'flex', gap: '20px' }}>
            <Htag tag="h2">Выберите категорию отеля</Htag>
            <Rating isEditable rating={rating} setRating={setRating} />
          </section>
        </div>
        <Button className={styles.indexBtn} border="primary">
          Найти
        </Button>
      </form>
    </Card>
  );
};
