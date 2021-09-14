import { UiAction, UiActionTypes } from '../types/ui.interface';

export const openModalReg = (): UiAction => {
  return { type: UiActionTypes.OPEN_MODAL_REG };
};

export const closeModalReg = (): UiAction => {
  return { type: UiActionTypes.CLOSE_MODAL_REG };
};
export const openModalLogin = (): UiAction => {
  return { type: UiActionTypes.OPEN_MODAL_LOG };
};

export const closeModalLogin = (): UiAction => {
  return { type: UiActionTypes.CLOSE_MODAL_LOG };
};

// export const closeModal = (payload:number): UiAction => {
//     return { type: UiActionTypes.CLOSE_MODAL, payload };
//   };
