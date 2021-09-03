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
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 },
  };

  const incrementRoom = (event) => {
    setRoom({
      ...room,
      [event.target.name]: room[event.target.name] + 1,
    });
  };

  const decrementRoom = (event) => {
    setRoom({
      ...room,
      [event.target.name]: room[event.target.name] - 1,
    });
  };

  const incrementGuest = (event) => {
    setGuest({
      ...guest,
      [event.target.name]: guest[event.target.name] + 1,
    });
  };

  const decrementGuest = (event) => {
    setGuest({
      ...guest,
      [event.target.name]: guest[event.target.name] - 1,
    });
  };

  return (
    <div className={cn(styles.dropdown)} {...props}>
      <div
        className={styles.dropdownTitle}
        onClick={() => setIsAccordionOpened(!isAccordionOpened)}
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
                <button
                  className={styles.button}
                  name="bedrooms"
                  onClick={decrementRoom}
                  disabled={room.bedrooms == 0}
                >
                  -
                </button>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {room.bedrooms}
                </Htag>
                <button
                  className={styles.button}
                  name="bedrooms"
                  onClick={incrementRoom}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">кровати</Htag>
              </div>
              <div className={styles.counter}>
                <button
                  className={styles.button}
                  name="beds"
                  onClick={decrementRoom}
                  disabled={room.beds == 0}
                >
                  -
                </button>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {room.beds}
                </Htag>
                <button
                  className={styles.button}
                  name="beds"
                  onClick={incrementRoom}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">Ванные комнаты</Htag>
              </div>
              <div className={styles.counter}>
                <button
                  className={styles.button}
                  name="bathrooms"
                  onClick={decrementRoom}
                  disabled={room.bathrooms == 0}
                >
                  -
                </button>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {room.bathrooms}
                </Htag>
                <button
                  className={styles.button}
                  name="bathrooms"
                  onClick={incrementRoom}
                >
                  +
                </button>
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
                <button
                  className={styles.button}
                  name="adult"
                  onClick={decrementGuest}
                  disabled={guest.adult == 0}
                >
                  -
                </button>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {guest.adult}
                </Htag>
                <button
                  className={styles.button}
                  name="adult"
                  onClick={incrementGuest}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">дети</Htag>
              </div>
              <div className={styles.counter}>
                <button
                  className={styles.button}
                  name="children"
                  onClick={decrementGuest}
                  disabled={guest.children == 0}
                >
                  -
                </button>
                <Htag className={styles.value} tag="h3">
                  {' '}
                  {guest.children}
                </Htag>
                <button
                  className={styles.button}
                  name="children"
                  onClick={incrementGuest}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.counterBlock}>
              <div className={styles.counterTitle}>
                <Htag tag="h3">младенцы</Htag>
              </div>
              <div className={styles.counter}>
                <button
                  className={styles.button}
                  name="baby"
                  onClick={decrementGuest}
                  disabled={guest.baby == 0}
                >
                  -
                </button>
                <Htag className={styles.value} tag="h3">
                  {guest.baby}
                </Htag>
                <button
                  className={styles.button}
                  name="baby"
                  onClick={incrementGuest}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
