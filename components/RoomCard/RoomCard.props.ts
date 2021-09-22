import { RoomType } from '../../interfaces/hotels.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RoomCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  room: RoomType;
}
