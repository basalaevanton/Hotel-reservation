import { RoomType } from '../../interfaces/hotels.interface';
import { myRatePlane } from '../../pages/hotels/[hotel]/[hotelRoom]';

export interface HotelRoomPageProps {
  room: RoomType;
  ratePlans: myRatePlane[];
}
