import 'normalize.css';
import React from 'react';
import { withLayout } from '../../../layout/Layout';

import axios from 'axios';
import { RoomRoot } from '../../../interfaces/hotels.interface';
import { GetServerSideProps } from 'next';

import { HotelRoomPage } from '../../../pageComponents';
import { API } from '../../../helpers/api';
import { useRouter } from 'next/router';
import { RoomTypeRate } from '../../../interfaces/ratePlanes.inteface';

export interface myRatePlane {
  desription: string;
  roomTypes: RoomTypeRate | undefined;
}

function HotelRoom({ room, ratePlan }: RoomRoot): JSX.Element {
  const router = useRouter();
  const idRoom = router.asPath.substring(router.asPath.lastIndexOf('/') + 1);

  const ratePlans: myRatePlane[] = [];

  let rate: myRatePlane = { desription: '', roomTypes: {} };

  ratePlan.data.map((plane) =>
    plane.components.map((el) => {
      el.includedInRate == true &&
        ((rate.desription = plane.description),
        (rate.roomTypes = plane.roomTypes.find(
          (room) => room.roomTypeId == idRoom
        )),
        ratePlans.push(rate),
        (rate = { desription: '', roomTypes: {} }));
    })
  );

  return <HotelRoomPage room={room} ratePlans={ratePlans} />;
}

export default withLayout(HotelRoom);

export const getServerSideProps: GetServerSideProps<RoomRoot> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: rooms } = await axios.get(API.HOST + '/' + params.hotel, {
    headers: {
      'x-api-key': API.KEY,
    },
  });
  const { data: rate } = await axios.get(
    API.HOST + '/' + params.hotel + '/rate-plans',
    {
      headers: {
        'x-api-key': API.KEY,
      },
    }
  );

  const room = rooms.roomTypes.find(
    (el: { roomTypeId: string | string[] | undefined }) =>
      el.roomTypeId == params.hotelRoom
  );

  return {
    props: { room: room, ratePlan: rate },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await axios.get(
//     API.HOST + '?size=2',

//     {
//       headers: {
//         'x-api-key': API.KEY,
//       },
//     }
//   );
//   const hotels = data.data;

//   const pages: { params: { rooms: any; room: any } }[] = [];
//   for (const el of hotels) {
//     el.roomTypes.map((id: { roomTypeId: any }) =>
//       pages.push({
//         params: {
//           rooms: el.hotelId,
//           room: id.roomTypeId,
//         },
//       })
//     );
//   }
//   // console.log(pages);

//   return {
//     paths: pages,

//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<RoomRoot> = async ({ params }) => {
//   // console.log(params?.room);

//   if (!params) {
//     return {
//       notFound: true,
//     };
//   }

//   const { data: rooms } = await axios.get(API.HOST + '/' + params.rooms, {
//     timeout: 500,
//     headers: {
//       'x-api-key': API.KEY,
//     },
//   });

//   const room = rooms.roomTypes.find(
//     (el: { roomTypeId: string | string[] | undefined }) =>
//       el.roomTypeId == params.room
//   );

//   return {
//     props: { room: room },
//   };
// };
