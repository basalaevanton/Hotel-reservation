import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface SwitchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  isChecked: boolean;
  handleToggle: () => void;
}
