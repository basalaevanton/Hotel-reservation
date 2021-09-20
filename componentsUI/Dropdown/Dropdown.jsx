import { DropdownProps, GuestState, RoomState } from './Dropdown.props';
import styles from './Dropdown.module.scss';
import ArrowIcon from './arrow.svg';
import { P, Htag } from '..';

import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

export const Dropdown = ({ title, ...props }) => {
  const [isAccordionOpened, setIsAccordionOpened] = useState(false);

  const [room, setRoom] = useState({
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  });

  const [guest, setGuest] = useState({
    adult: 0,
    children: 0,
    baby: 0,
  });

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto',
      display: 'block',
    },
    hidden: {
      opacity: 0,
      height: 0,
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const incrementRoom = (event) => {
    setRoom({
      ...room,
      [event.target.id]: room[event.target.id] + 1,
    });
  };

  const decrementRoom = (event) => {
    const target = event.target.id;
    room[target] !== 0 &&
      setRoom({
        ...room,
        [target]: room[target] - 1,
      });
  };

  const incrementGuest = (event) => {
    setGuest({
      ...guest,
      [event.target.id]: guest[event.target.id] + 1,
    });
  };

  const decrementGuest = (event) => {
    const target = event.target.id;
    guest[target] !== 0 &&
      setGuest({
        ...guest,
        [target]: guest[target] - 1,
      });
  };

  const hanleSpace = (key) => {
    if (key.code === 'Space') {
      key.preventDefault();
      setIsAccordionOpened(!isAccordionOpened);
    }
  };

  return (
    <div className={cn(styles.dropdown)} {...props}>
      <div
        className={cn(styles.dropdownTitle, {
          [styles.dropdownTitleClose]: isAccordionOpened == false,
        })}
        onClick={() => setIsAccordionOpened(!isAccordionOpened)}
        tabIndex={0}
        onKeyDown={(key) => hanleSpace(key)}
      >
        {title === 'guest' ? (
          <P> Сколько гостей:</P>
        ) : (
          <P className={styles.p}>
            {room.bedrooms} спальни, {room.beds} кровати, {room.bathrooms}{' '}
            ванные комнаты.
          </P>
        )}

        <ArrowIcon
          className={cn(styles.arrowIcon, {
            [styles.arrowIconDown]: isAccordionOpened == true,
          })}
        />
      </div>

      <motion.div
        className={styles.children}
        animate={isAccordionOpened ? 'visible' : 'hidden'}
        variants={variants}
        initial="hidden"
      >
        {title === 'room' ? (
          <div className={styles.counters}>
            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">спальни</Htag>
              </div>
              <div className={styles.counter}>
                <div
                  className={styles.button}
                  id="bedrooms"
                  onClick={decrementRoom}
                  
                >
                  -
                </div>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {room.bedrooms}
                </Htag>
                <div
                  className={styles.button}
                  id="bedrooms"
                  onClick={incrementRoom}
                >
                  +
                </div>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">кровати</Htag>
              </div>
              <div className={styles.counter}>
                <div
                  className={styles.button}
                  id="beds"
                  onClick={decrementRoom}
              
                >
                  -
                </div>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {room.beds}
                </Htag>
                <div
                  className={styles.button}
                  id="beds"
                  onClick={incrementRoom}
                >
                  +
                </div>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">Ванные комнаты</Htag>
              </div>
              <div className={styles.counter}>
                <div
                  className={styles.button}
                  id="bathrooms"
                  onClick={decrementRoom}
                
                >
                  -
                </div>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {room.bathrooms}
                </Htag>
                <div
                  className={styles.button}
                  id="bathrooms"
                  onClick={incrementRoom}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.counters}>
            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">взрослые</Htag>
              </div>
              <div className={styles.counter}>
                <div
                  className={styles.button}
                  id="adult"
                  onClick={decrementGuest}
                
                >
                  -
                </div>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {guest.adult}
                </Htag>
                <div
                  className={styles.button}
                  id="adult"
                  onClick={incrementGuest}
                >
                  +
                </div>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">дети</Htag>
              </div>
              <div className={styles.counter}>
                <div
                  className={styles.button}
                  id="children"
                  onClick={decrementGuest}
                  
                >
                  -
                </div>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {guest.children}
                </Htag>
                <div
                  className={styles.button}
                  id="children"
                  onClick={incrementGuest}
                >
                  +
                </div>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">младенцы</Htag>
              </div>
              <div className={styles.counter}>
                <div
                  className={styles.button}
                  id="baby"
                  onClick={decrementGuest}
                  
                >
                  -
                </div>
                <Htag className={styles.value} tag="h3">
                  {guest.baby}
                </Htag>
                <div
                  className={styles.button}
                  id="baby"
                  onClick={incrementGuest}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
