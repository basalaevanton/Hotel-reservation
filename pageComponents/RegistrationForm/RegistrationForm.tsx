import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RegistrationFormProps } from './RegistrationForm.props';
import { UserForm } from '../../interfaces/UserFormDB.intrerface';

import styles from './RegistrationForm.module.scss';
import {
  Button,
  Htag,
  Input,
  RadioInput,
  Switch,
  Modal,
} from '../../componentsUI';

import cn from 'classnames';

import { Controller, useForm } from 'react-hook-form';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedTextInput from 'react-text-mask';

import { doc, setDoc } from 'firebase/firestore';
import db from '../../lib/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { useTypedSelector, useActions } from '../../hooks';

export const RegistrationForm = ({
  ...props
}: RegistrationFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserForm>();

  const { showModalRegistration } = useTypedSelector((state) => state.ui);
  const { openModalReg, closeModalReg } = useActions();

  // gender radio input
  const [gender, setGender] = useState<string>('');

  //
  const [subscription, setSubscribe] = useState<boolean>(true);
  const switchSubscribe = () => {
    setSubscribe(!subscription);
  };
  //
  const [isSuccess, setIsSuccess] = useState<string>('');
  const [error, setIsError] = useState<string>('');

  const onSubmit = async (data: UserForm) => {
    data.dateRegistration = new Date();
    data.subscription = subscription;

    

    try {
      const auth = getAuth();
      // проверка email в базе
      fetchSignInMethodsForEmail(auth, data.email).then((providers) => {
        if (providers.length === 0) {
          try {
            const auth = getAuth();
            // создаем пользователя
            createUserWithEmailAndPassword(
              auth,
              data.email,
              data.password
            ).then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // в firestore добавляем по id инфу о пользователе
              setDoc(doc(db, 'users', user.uid), {
                name: data.name,
                lastname: data.lastname,
                gender: data.gender,
                birthday: data.birthday,
                email: data.email,
                dateRegistration: data.dateRegistration,
              });
              // добавляем подписку
              subscription &&
                setDoc(doc(db, 'subscriptions', user.uid), {
                  email: data.email,
                  dateRegistration: data.dateRegistration,
                });
            });
            setIsSuccess('Вы зарегестрировались на сайте.');
            reset();
          } catch (e: any) {
            setIsError(e.message);
          }
        } else {
          setIsSuccess('Вы уже зарегестрированы на сайте.');
        }
      });
    } catch (e: any) {
      setIsError(e.message);
    }
    openModalReg();
  };

  return (
    <div className={styles.registrationForm}>
      <Modal
        showModal={showModalRegistration}
        closeModal={() => closeModalReg()}
      >
        {isSuccess || error}
        <Link href="/signIn">
          <a>
            <Button border="primary" onClick={() => closeModalReg()}>
              Войти
            </Button>
          </a>
        </Link>
      </Modal>

      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        <Htag tag="h1">Регистрация аккаунта</Htag>

        <section className={styles.humanInfo}>
          <Input
            placeholder="Имя"
            type="text"
            {...register('name', {
              required: { value: true, message: 'Заполните имя' },
            })}
            error={errors.name}
          />
          <Input
            placeholder="Фамилия"
            type="text"
            {...register('lastname', {
              required: { value: true, message: 'Заполните фамилию' },
            })}
            error={errors.lastname}
          />

          <Controller
            control={control}
            name="gender"
            rules={{
              required: { value: true, message: 'Укажите ваш пол' },
            }}
            render={({ field }) => (
              <div className={styles.genderInfo}>
                <RadioInput
                  name="gender"
                  label="Мужчина"
                  isChecked={gender === 'Мужчина'}
                  handleChange={(e: string) => {
                    setGender(e);
                    field.onChange(e);
                  }}
                />
                <RadioInput
                  name="gender"
                  label="Женщина"
                  isChecked={gender === 'Женщина'}
                  handleChange={(e: string) => {
                    setGender(e);
                    field.onChange(e);
                  }}
                />
                <span className={styles.errorGender}>
                  {errors.gender?.message}
                </span>
              </div>
            )}
          />
        </section>

        <section className={styles.birthdayInfo}>
          <Htag tag="h3">Дата рождения</Htag>
          <Controller
            control={control}
            name="birthday"
            rules={{
              required: { value: true, message: 'Укажите ваш день рождения' },
            }}
            render={({ field }) => (
              <>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  placeholderText="ДД.ММ.ГГГГ"
                  customInput={
                    <MaskedTextInput
                      type="text"
                      mask={[
                        /\d/,
                        /\d/,
                        '.',
                        /\d/,
                        /\d/,
                        '.',
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                      ]}
                    />
                  }
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  className={styles.datePicker}
                />

                <span className={styles.errorGender}>
                  {errors.birthday?.message}
                </span>
              </>
            )}
          />
        </section>

        <section className={styles.loginInfo}>
          <Htag tag="h3">Данные для входа в сервис</Htag>
          <Input
            placeholder="email"
            type="text"
            {...register('email', {
              required: 'Введите Email',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Введите правильный Email',
              },
            })}
            error={errors.email}
          />
          <Input
            placeholder="password"
            type="password"
            {...register('password', {
              required: 'Введите password',
              minLength: {
                value: 5,
                message: 'Минимальная длина пароля 5',
              },
            })}
            error={errors.password}
          />
        </section>

        <section className={styles.subscriptionInfo}>
          <Switch
            label="Получать спецпредложения"
            isChecked={subscription}
            handleToggle={switchSubscribe}
          />
        </section>

        <Button
          arrow="right"
          appearance="primary"
          className={styles.buttonInfo}
        >
          Зарегестрироваться
        </Button>
      </form>

      <div className={styles.toLoginPage}>
        Уже есть аккаунт на Toxin?
        <Link href="/signIn">
          <a>
            <Button border="primary">Войти</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
