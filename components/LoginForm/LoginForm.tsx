import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LoginFormProps } from './LoginForm.props';
import { userLoginForm } from './userLoginForm.intrerface';

import styles from './LoginForm.module.scss';
import { Button, Htag, Input, RadioInput, Switch } from '../../componentsUI';

import cn from 'classnames';

import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

export const LoginForm = ({ ...props }: LoginFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userLoginForm>();

  //
  const [isSuccess, setIsSuccess] = useState<string>('');
  const [error, setIsError] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess('');
      setIsError('');
    }, 3000);
    
// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

    // return () => {};isSuccess
  }, []);

  const onSubmit = (data: userLoginForm) => {
    console.log(data);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // localStorage.setItem('authUser', JSON.stringify(user));
        // document.cookie = JSON.stringify(user);
        // console.log(user.uid);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className={styles.loginForm}>
      <div>{isSuccess}</div>
      <div>{error}</div>
      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        <Htag tag="h1">Войти</Htag>

        <section className={styles.loginInfo}>
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
