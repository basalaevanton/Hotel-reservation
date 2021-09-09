import { useEffect, useState } from 'react';
import { SubscribeFormProps, EmailForm } from './SubscribeForm.props';
import styles from './SubscribeForm.module.scss';
import { Input } from '../../componentsUI';

import CloseIcon from './close.svg';

import cn from 'classnames';

import { useForm } from 'react-hook-form';

import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import db from '../../lib/firebase';

export const SubscribeForm = ({
  ...props
}: SubscribeFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailForm>();

  const [isSuccess, setIsSuccess] = useState<string>('');
  const [error, setIsError] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess('');
      setIsError('');
      reset();
    }, 3000);
    // return () => {};
  }, [isSuccess]);

  const onSubmit = async (data: EmailForm) => {
    data.date = new Date();
    console.log(data);

    try {
      const subscr = query(
        //   Внимание. не отловить ошибки из за проверки длины массива
        collection(db, 'subscriptions'),
        where('email', '==', data.email)
      );

      const querySnapshot = await getDocs(subscr);
      if (querySnapshot.docs.length == 0) {
        try {
          const docRef = await addDoc(collection(db, 'subscriptions'), {
            email: data.email,
            date: data.date,
          });

          setIsSuccess('Спасибо, вы подписались на новости отеля.');

          reset();
        } catch (e: any) {
          setIsError(e.message);
        }
      } else {
        setIsSuccess('Вы уже подписаны');
      }
    } catch (e: any) {
      setIsError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      <Input
        arrow
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
      {isSuccess && (
        <div className={styles.success}>
          <div className={styles.successTitle}>
            {isSuccess}
            <CloseIcon
              className={styles.successIcon}
              onClick={() => setIsSuccess('')}
            />
          </div>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <div className={styles.errorTitle}>
            Что-то пошло не так.
            <CloseIcon
              className={styles.errorIcon}
              onClick={() => setIsError(undefined)}
            />
          </div>
        </div>
      )}
    </form>
  );
};
