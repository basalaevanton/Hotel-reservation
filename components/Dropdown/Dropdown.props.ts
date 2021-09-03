import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface RoomState {
  bedrooms: number;
  beds: number;
  bathrooms: number;
}
export interface GuestState {
  adult: number;
  children: number;
  baby: number;
}

export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: 'guest' | 'room';
}
