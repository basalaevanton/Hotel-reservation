import { Datum } from '../../interfaces/hotels.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HotelCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  hotel: Datum;
}
