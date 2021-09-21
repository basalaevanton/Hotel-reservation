import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'hotel' | 'room';

  children: ReactNode;
}