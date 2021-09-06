import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import InstagramIcon from './instagram.svg';
import TwitterIcon from './twitter.svg';
import FacebookIcon from './facebook.svg';
import Logo from '../logo.svg';
import CloseIcon from './close.svg';

import cn from 'classnames';

import Link from 'next/link';

import { format } from 'date-fns';
import { useForm, Controller } from 'react-hook-form';

import { P, Htag, Input, Button } from '../../components';

import {
  NavigationFooter,
  AboutFooter,
  SupportFooter,
} from '../../helpers/helper';
import { useState } from 'react';

export interface EmailForm {
  email: string;
}

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setIsError] = useState<string>();

  const onSubmit = async (data: EmailForm) => {
    setIsSuccess(true);
    console.log(data);
  };

  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <nav>
        <ul className={styles.footerNav}>
          <li className={styles.hotelTitle}>
            <Link href="/">
              <a>
                <Logo className={styles.logo} />
              </a>
            </Link>
            <P>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </P>
          </li>

          <ul className={styles.navigation}>
            <li>
              <Htag tag="h3">{NavigationFooter.title}</Htag>
            </li>
            {NavigationFooter.links.map((link, id) => (
              <li key={id} className={styles.link}>
                <Link href={link.route}>
                  <a >{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles.about}>
            <li>
              <Htag tag="h3">{AboutFooter.title}</Htag>
            </li>
            {AboutFooter.links.map((link, id) => (
              <li key={id} className={styles.link}>
                <Link href={link.route}>
                  <a >{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles.support}>
            <li>
              <Htag tag="h3">{SupportFooter.title}</Htag>
            </li>
            {SupportFooter.links.map((link, id) => (
              <li key={id} className={styles.link}>
                <Link href={link.route}>
                  <a >{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>

          <li className={styles.suscription}>
            <Htag tag="h3">Подписка</Htag>
            <P>Получайте специальные предложения и новости сервиса</P>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    Спасибо, вы подписались на новости отеля.
                    <CloseIcon
                      className={styles.successIcon}
                      onClick={() => setIsSuccess(false)}
                    />
                  </div>
                </div>
              )}
            </form>
          </li>
        </ul>
      </nav>

      <div className={styles.copyright}>
        <P>
          Copyright © 2020 - {format(new Date(), 'yyyy')} Toxin отель. Все права
          защищены.
        </P>
        <div className={styles.socialLinks}>
          <Link href="/">
            <a>
              <InstagramIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <TwitterIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FacebookIcon />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
