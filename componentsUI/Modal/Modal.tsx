import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';

import ArrowIcon from './arrow.svg';

import { ButtonIcon, Htag } from '..';

import cn from 'classnames';
import React, { useState, KeyboardEvent } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

export const Modal = ({
  showModal,
  children,
  className,
  ...props
}: ModalProps): JSX.Element => {
  // className={cn(styles.accordion, className)}

  return (
    <div
      className={cn(styles.modalContainer, className, {
        [styles.showModalContainer]: showModal == true,
      })}
      // onClick={()=>setShowModal(false)}
      {...props}
    >
      <AnimatePresence>
        {showModal && (
          <motion.div
            className={styles.modalBox}
            initial={{ opacity: 0, y: 60, scale: 0.3 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: 'spring', stiffness: 300 },
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            >
              {children}
              <ButtonIcon
                className={styles.menuClose}
                icon="close"
                // onClick={() => setShowModal(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
