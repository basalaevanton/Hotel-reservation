import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface AccordionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  children: ReactNode;
}
