import { UiAction, UiActionTypes } from '../../interfaces/ui.interface';

export const openModal = (): UiAction => {
  return { type: UiActionTypes.OPEN_MODAL };
};

export const closeModal = (): UiAction => {
  return { type: UiActionTypes.CLOSE_MODAL };
};

// export const closeModal = (payload:number): UiAction => {
//     return { type: UiActionTypes.CLOSE_MODAL, payload };
//   };