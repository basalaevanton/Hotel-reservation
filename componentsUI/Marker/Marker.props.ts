import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MarkerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string;
  lat: number;
  lng: number;
}
