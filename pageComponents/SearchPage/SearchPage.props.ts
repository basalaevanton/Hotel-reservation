import { Hotel } from '../../interfaces/hotels.interface';

export interface SearchPageProps {
  hotels: Hotel[];
  totalHotels: number;
  page: number;
}
