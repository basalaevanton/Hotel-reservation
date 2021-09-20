import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SearchFormProps } from './SearchForm';
import { SearchForm } from './SearchForm.intrerface';

import styles from './SearchForm.module.scss';
import {
  Accordion,
  Button,
  Checkbox,
  Dropdown,
  Htag,
  Input,
  Modal,
  P,
  RadioInput,
  RangeInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';

export const SidebarSearchForm = ({
  ...props
}: SearchFormProps): JSX.Element => {
  const onSubmit = (data: SearchForm) => {
    console.log(data);
  };

  return (
    <div className={styles.searchForm}>
      <form {...props}>
        <section className={styles.dates}>
          <Htag tag="h3" className={styles.title}>Даты пребывания в отеле</Htag>
          <Input placeholder="dates..." type="date" />
        </section>

        <section className={styles.guests}>
          <Htag tag="h3"className={styles.title}>Гости</Htag>
          <Dropdown title="guest" />
        </section>

        <section className={styles.price}>
          <Htag tag="h3" className={styles.title}>Диапозон цены</Htag>
          <RangeInput
            min={0}
            max={500}
            onChange={({ min, max }: { min: number; max: number }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
          <div className={styles.priceInfo}>Стоимость за сутки пребывания в номере</div>
        </section>

        <section className={styles.rules}>
          <Htag tag="h3" className={styles.title}>Правила дома</Htag>
          <Checkbox label="Можно курить" />
          <Checkbox label="Можно с питомцами" />
          <Checkbox label="Можно пригласить гостей (до 10 человек)" />
        </section>

        <section className={styles.accessability}>
          <Htag tag="h3" className={styles.title}>Доступность</Htag>
          <Checkbox
            label="Широкий коридор"
            info="Ширина коридоров в номере не менее 91 см."
          />
          <Checkbox
            label="Помощник для инвалидов"
            info="На 1 этаже вас встретит специалист  и проводит до номера."
          />
        </section>

        <section className={styles.room}>
          <Htag tag="h3" className={styles.title}>Удобства номера</Htag>
          <Dropdown title="room" />
        </section>

        <section className={styles.amenities}>
          <Accordion title="Дополнительные удобства" accordionSearch>
            <Checkbox label="Завтрак" />
            <Checkbox label="Письменный стол" />
            <Checkbox label="Стул для кормления" />
            <Checkbox label="Кроватка" />
            <Checkbox label="Телевизор" />
            <Checkbox label="Шампунь" />
          </Accordion>
        </section>
      </form>
    </div>
  );
};
