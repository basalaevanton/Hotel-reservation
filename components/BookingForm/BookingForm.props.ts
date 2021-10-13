import { BookingModal } from '../../pageComponents/HotelRoomPage/HotelRoom.intrerface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BookingFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  ratePlan: BookingModal;
}

export interface EmailForm {
  email: string;
  date: Date;
}
