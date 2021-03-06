import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import up from './up.svg';
import arrow from './arrow.svg';
import like from './like.svg';
import close from './close.svg';
import menu from './menu.svg';
import inputArrow from './inputArrow.svg';


export const icons = {
  up,
  arrow,
  like,
  close,
  menu,
  inputArrow
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  icon: IconName;
}
