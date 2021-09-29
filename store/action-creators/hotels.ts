import {
  HotelsState,
  HotelsAction,
  HotelsActionTypes,
} from '../types/hotels.interface';

import { API } from '../../helpers/api';
import axios from 'axios';
import { Dispatch } from 'react';

export const getHotels = () => async (dispatch: Dispatch<HotelsAction>) => {
  const data = await axios.get(API.HOST + `?size=1`, {
    headers: {
      'x-api-key': API.KEY,
    },
  });
  const hotels = data.data;
  // console.log(hotels);
  dispatch({
    type: HotelsActionTypes.FETCH_HOTELS,
    payload: hotels,
  });
};
