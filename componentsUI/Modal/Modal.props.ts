import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showModal: boolean;
  children: ReactNode;
  closeModal: () => void;
}
