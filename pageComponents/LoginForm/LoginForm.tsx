import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LoginFormProps } from './LoginForm.props';
import { userLoginForm } from './userLoginForm.intrerface';

import styles from './LoginForm.module.scss';
import {
  Button,
  Htag,
  Input,
  Modal,
  RadioInput,
  Switch,
} from '../../componentsUI';

import cn from 'classnames';

import { Controller, useForm } from 'react-hook-form';

import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import db from '../../lib/firebase';
import {
  getAuth,

  signInWithEmailAndPassword,

} from 'firebase/auth';
import { useTypedSelector, useActions } from '../../hooks';

export const LoginForm = ({ ...props }: LoginFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userLoginForm>();

  const { showModalLogin } = useTypedSelector((state) => state.ui);
  const { openModalLogin, closeModalLogin } = useActions();
  //
  const [isSuccess, setIsSuccess] = useState<string>('');
  const [error, setIsError] = useState<string>('');



  const onSubmit = (data: userLoginForm) => {


    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in

        // const user = userCredential.user;

        // localStorage.setItem('authUser', JSON.stringify(user));


        setIsSuccess('Вы успешно зашли на сайт.');
        reset();
      })
      .catch((e: any) => {
        setIsError(e.message);
        reset();
      });
    openModalLogin();
  };

  return (
    <div className={styles.loginForm}>
      
      <Modal showModal={showModalLogin} closeModal={() => closeModalLogin()}>
        {isSuccess || error}
        {isSuccess && (
          <Link href="/">
            <a>
              <Button border="primary" onClick={() => closeModalLogin()}>
                Войти
              </Button>
            </a>
          </Link>
        )}
        {error && (
          <Button border="primary" onClick={() => closeModalLogin()}>
            Ошибка входа.
          </Button>
        )}
      </Modal>

      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        <Htag tag="h1">Войти</Htag>

        <section className={styles.loginInfo}>
          <Input
            placeholder="email"
            type="text"
            value='admin@admin.ru'
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
            value='admin123'
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

        <Button
          arrow="right"
          appearance="primary"
          className={styles.buttonInfo}
        >
          Войти
        </Button>
      </form>
      <div className={styles.toLoginPage}>
        Нет аккаунта на Toxin?
        <Link href="/registration">
          <a>
            <Button border="primary">Зарегестрироваться</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
