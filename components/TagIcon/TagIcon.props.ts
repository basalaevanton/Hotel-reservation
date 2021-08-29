import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import comfort from './comfort.svg';
import convenience from './convenience.svg';
import cosiness from './cosiness.svg';



export const info = {
  comfort: {
    title: 'Комфорт',
    text: 'Шумопоглощающие стены',
    icon: comfort,
  },
  convenience: {
    title: 'Удобство',
    text: 'Окно в каждой из спален',
    icon: convenience,
  },
  cosiness: { title: 'Уют', text: 'Номер оснащён камином', icon: cosiness },
};

export type TagName = keyof typeof info;

export interface TagIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  appearance: TagName;
}
