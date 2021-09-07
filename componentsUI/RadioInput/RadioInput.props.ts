import {  DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface RadioInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  isChecked: boolean;
  handleChange: (e: string) => void;
}
