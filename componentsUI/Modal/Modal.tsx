import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';

import ArrowIcon from './arrow.svg';

import { ButtonIcon, Htag } from '..';

import cn from 'classnames';
import React, {
  useState,
  KeyboardEvent,
  useLayoutEffect,
  useEffect,
} from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useActions, useTypedSelector } from '../../hooks';

export const Modal = ({
  showModal,
  children,
  closeModal,
  className,
  ...props
}: ModalProps): JSX.Element => {
  const { showModalRegistration, showModalLogin, showModalBooking } =
    useTypedSelector((state) => state.ui);

  const variantsModalBox = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300 },
    },
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.3,
    },
  };

  const modalContent = {
    visible: { y: 0, opacity: 1, transition: { delay: 1 } },
    hidden: { y: -30, opacity: 0 },
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (showModalRegistration || showModalLogin || showModalBooking) {
      window.addEventListener('click', (e: MouseEvent) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((e.target as HTMLDivElement).id === 'modalDialog') {
          closeModal();
        }
      });
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      window.removeEventListener('click', () => {});
    };
  });

  return (
    <div
      className={cn(styles.modalContainer, className, {
        [styles.showModalContainer]: showModal == true,
      })}
      id="modalDialog"
      // onClick={() => closeModal()}
      {...props}
    >
      <AnimatePresence>
        <motion.div
          className={styles.modalBox}
          initial="hidden"
          animate={showModal ? 'visible' : 'hidden'}
          variants={variantsModalBox}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
        >
          <motion.div
            className={styles.modalContent}
            animate={showModal ? 'visible' : 'hidden'}
            variants={modalContent}
            initial="hidden"
          >
            {children}
            <ButtonIcon
              className={styles.menuClose}
              icon="close"
              onClick={() => closeModal()}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
