import 'normalize.css';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../../layout/Layout';

import axios from 'axios';
import { Datum, RoomRoot } from '../../../interfaces/hotels.interface';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { HotelRoomPage } from '../../../pageComponents';
import { API } from '../../../helpers/api';

function HotelRoom({ room }: RoomRoot): JSX.Element {
  return (
    <div>
      <HotelRoomPage room={room} />
    </div>
  );
}

export default withLayout(HotelRoom);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(
    API.HOST + '?size=2',

    {
      headers: {
        'x-api-key': API.KEY,
      },
    }
  );
  const hotels = data.data;

  const pages: { params: { rooms: any; room: any } }[] = [];
  for (const el of hotels) {
    el.roomTypes.map((id: { roomTypeId: any }) =>
      pages.push({
        params: {
          rooms: el.hotelId,
          room: id.roomTypeId,
        },
      })
    );
  }
  // console.log(pages);

  return {
    paths: pages,

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<RoomRoot> = async ({ params }) => {
  // console.log(params?.room);

  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: rooms } = await axios.get(
    API.HOST + '/' + params.rooms,
    {
      timeout: 500,
      headers: {
        'x-api-key': API.KEY,
      },
    }
  );

  

  const room = rooms.roomTypes.find(
    (el: { roomTypeId: string | string[] | undefined }) =>
      el.roomTypeId == params.room
  );

  return {
    props: { room: room },
  };
};
