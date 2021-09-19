import { UserForm } from '../../interfaces/UserFormDB.intrerface';

export interface UserState {
  user: UserForm[] | undefined;
  // error: string;
}

export enum UserActionTypes {
  GET_USER = 'GET_USER',
  SIGN_OUT = 'SIGN_OUT',
}

interface GetUserAction {
  type: UserActionTypes.GET_USER;
  payload: UserForm[];
}
interface SignOutAction {
  type: UserActionTypes.SIGN_OUT;
}

// interface ShowModalAction {
//   type: UiActionTypes.SHOW_MODAL;
//   payload: number;
// }

export type UserAction = GetUserAction | SignOutAction;
