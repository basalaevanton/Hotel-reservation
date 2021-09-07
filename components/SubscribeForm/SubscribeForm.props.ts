import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SubscribeFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export interface EmailForm {
  email: string;
  date: Date;
}
