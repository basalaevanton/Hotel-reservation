/* eslint-disable @typescript-eslint/ban-types */
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface RangeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  min: number;
  max: number;
  onChange: any;
}
