import { UserForm } from '../../interfaces/UserFormDB.intrerface';
import {
  UserState,
  UserAction,
  UserActionTypes,
} from '../types/user.interface';



export const getUser = (payload: UserForm[]): UserAction => {
  return { type: UserActionTypes.GET_USER, payload };
};

