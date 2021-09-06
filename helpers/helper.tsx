import { FooterMenu } from '../interfaces/footerMenu.interface';

export const NavigationFooter: FooterMenu = {
  title: 'Навигация',
  links: [
    {
      name: 'О нас',
      route: '/',
    },
    {
      name: 'Новости',
      route: '/',
    },
    {
      name: 'Служба поддержки',
      route: '/',
    },
    {
      name: 'Услуги',
      route: '/',
    },
  ],
};

export const AboutFooter: FooterMenu = {
  title: 'О нас',
  links: [
    {
      name: 'О сервисе',
      route: '/',
    },
    {
      name: 'Наша команда',
      route: '/',
    },
    {
      name: 'Вакансии',
      route: '/',
    },
    {
      name: 'Инвесторы',
      route: '/',
    },
  ],
};
export const SupportFooter: FooterMenu = {
  title: 'Служба поддержки',
  links: [
    {
      name: 'Соглашения',
      route: '/',
    },
    {
      name: 'Сообщества',
      route: '/',
    },
    {
      name: 'Связь с нами',
      route: '/',
    },
  ],
};
