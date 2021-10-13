import { RetailRate, RoomTypeRate } from '../../interfaces/ratePlanes.inteface';

export interface BookingModal {
  adults: number;
  roomsSellable: number;
  retailRate: RetailRate;
  desription: string;
  roomTypes: RoomTypeRate | undefined;
  hotelId: string;
}
