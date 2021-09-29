import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction, CombinedState } from 'redux';
import { HotelsState } from '../../store/types/hotels.interface';

import { UiState } from '../../store/types/ui.interface';

import { UserState } from '../../store/types/user.interface';

import { hotelsReducer } from './hotelsReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  hotels: hotelsReducer,
});

export const reducer = (
  state:
    | CombinedState<{ ui: UiState; user: UserState; hotels: HotelsState }>
    | undefined,
  action: any
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case 'UI':
      return { ...state, ui: action.payload };
    case 'USER':
      return { ...state, user: action.payload };
    case 'hotels':
      return { ...state, hotels: action.payload };
    default:
      return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
