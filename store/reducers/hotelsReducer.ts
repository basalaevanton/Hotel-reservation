import {
  HotelsState,
  HotelsAction,
  HotelsActionTypes,
} from '../types/hotels.interface';

const initialState: HotelsState = {
  hotels: [],
  // error: '',
};

export const hotelsReducer = (
  state = initialState,
  action: HotelsAction
): HotelsState => {
  switch (action.type) {
    case HotelsActionTypes.FETCH_HOTELS:
      return { ...state, hotels: action.payload };

    default:
      return state;
  }
};
