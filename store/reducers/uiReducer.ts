import {
  UiState,
  UiAction,
  UiActionTypes,
} from '../../interfaces/ui.interface';

const initialState: UiState = {
  showModalRegistration: false,
};

export const uiReducer = (state = initialState, action: UiAction): UiState => {
  switch (action.type) {
    case UiActionTypes.OPEN_MODAL:
      return { ...state, showModalRegistration: true };
    case UiActionTypes.CLOSE_MODAL:
      return { ...state, showModalRegistration: false };
    default:
      return state;
  }
};
