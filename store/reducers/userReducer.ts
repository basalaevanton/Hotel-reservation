import {
  UserState,
  UserAction,
  UserActionTypes,
} from '../types/user.interface';

const initialState: UserState = {
  user: [],
  // error: '',
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USER:
      return { ...state, user: action.payload };
    case UserActionTypes.SIGN_OUT:
      return { ...state };

    default:
      return state;
  }
};
