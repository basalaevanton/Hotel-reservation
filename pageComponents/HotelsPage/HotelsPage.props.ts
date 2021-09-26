import { Hotel } from '../../interfaces/hotels.interface';

export interface HotelsPageProps {
  hotels: Hotel[];
  totalHotels: number;
  page: number;
}
