import { UiState, UiAction, UiActionTypes } from '../types/ui.interface';

const initialState: UiState = {
  showModalRegistration: false,
  showModalLogin: false,
  showModalBooking: false,
};

export const uiReducer = (state = initialState, action: UiAction): UiState => {
  switch (action.type) {
    case UiActionTypes.OPEN_MODAL_REG:
      return { ...state, showModalRegistration: true };
    case UiActionTypes.CLOSE_MODAL_REG:
      return { ...state, showModalRegistration: false };
    case UiActionTypes.OPEN_MODAL_LOG:
      return { ...state, showModalLogin: true };
    case UiActionTypes.CLOSE_MODAL_LOG:
      return { ...state, showModalLogin: false };
    case UiActionTypes.OPEN_MODAL_BOOK:
      return { ...state, showModalBooking: true };
    case UiActionTypes.CLOSE_MODAL_BOOK:
      return { ...state, showModalBooking: false };
    default:
      return state;
  }
};
