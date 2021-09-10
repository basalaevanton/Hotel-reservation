export interface UiState {
  showModalRegistration: boolean;
}

export enum UiActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

interface OpenModalAction {
  type: UiActionTypes.OPEN_MODAL;
}
interface CloseModalAction {
  type: UiActionTypes.CLOSE_MODAL;
}

// interface ShowModalAction {
//   type: UiActionTypes.SHOW_MODAL;
//   payload: number;
// }

export type UiAction = OpenModalAction | CloseModalAction;
