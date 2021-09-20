import { AccordionProps } from './Accordion.props';
import styles from './Accordion.module.scss';
import ArrowIcon from './arrow.svg';
import { Htag } from '..';

import cn from 'classnames';
import { useState, KeyboardEvent } from 'react';

import { motion } from 'framer-motion';
import { useIsMedium } from '../../hooks/mediaQueries';

export const Accordion = ({
  title,
  accordionSearch,
  children,
  className,
  ...props
}: AccordionProps): JSX.Element => {
  const [isAccordionOpened, setIsAccordionOpened] = useState<boolean>(false);
  const isMedium = useIsMedium();

  const variants = !isMedium
    ? {
        visible: {
          opacity: 1,
          y: 40,
          display: 'flex',
        },
        hidden: {
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        },
      }
    : {
        visible: {
          opacity: 1,
          display: 'flex',
          x: 120,
        },
        hidden: {
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        },
      };

  const hanleSpace = (key: KeyboardEvent<HTMLDivElement>) => {
    if (key.code === 'Space') {
      key.preventDefault();
      setIsAccordionOpened(!isAccordionOpened);
    }
  };

  return (
    <div className={cn(styles.accordion)} {...props}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsAccordionOpened(!isAccordionOpened)}
        tabIndex={0}
        onKeyDown={(key: KeyboardEvent<HTMLDivElement>) => hanleSpace(key)}
      >
        <Htag className={styles.Htag} tag="h3">
          {title}
        </Htag>

        <ArrowIcon
          className={cn(styles.arrowIcon, {
            [styles.arrowIconDown]: isAccordionOpened == true,
            [styles.arrowIconSearch]: accordionSearch == true,
          })}
        />
      </div>
      <motion.div
        className={cn(styles.children, className)}
        animate={isAccordionOpened ? 'visible' : 'hidden'}
        variants={variants}
        initial="hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};
