export interface UiState {
  showModalRegistration: boolean;
  showModalLogin: boolean;
  showModalBooking: boolean,
}

export enum UiActionTypes {
  OPEN_MODAL_REG = 'OPEN_MODAL_REG',
  CLOSE_MODAL_REG = 'CLOSE_MODAL_REG',
  OPEN_MODAL_LOG = 'OPEN_MODAL_LOG',
  CLOSE_MODAL_LOG = 'CLOSE_MODAL_LOG',
  OPEN_MODAL_BOOK = 'OPEN_MODAL_BOOK',
  CLOSE_MODAL_BOOK = 'CLOSE_MODAL_BOOK',
}

interface OpenModalRegAction {
  type: UiActionTypes.OPEN_MODAL_REG;
}
interface CloseModalRegAction {
  type: UiActionTypes.CLOSE_MODAL_REG;
}

interface OpenModalLoginAction {
  type: UiActionTypes.OPEN_MODAL_LOG;
}
interface CloseModalLoginAction {
  type: UiActionTypes.CLOSE_MODAL_LOG;
}

interface OpenModalBookingAction {
  type: UiActionTypes.OPEN_MODAL_BOOK;
}
interface CloseModalBookingAction {
  type: UiActionTypes.CLOSE_MODAL_BOOK;
}

// interface ShowModalAction {
//   type: UiActionTypes.SHOW_MODAL;
//   payload: number;
// }

export type UiAction =
  | OpenModalRegAction
  | CloseModalRegAction
  | OpenModalLoginAction
  | CloseModalLoginAction
  | OpenModalBookingAction
  | CloseModalBookingAction;
