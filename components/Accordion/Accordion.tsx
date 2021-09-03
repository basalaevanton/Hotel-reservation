import { AccordionProps } from './Accordion.props';
import styles from './Accordion.module.scss';
import ArrowIcon from './arrow.svg';
import { Htag } from '../../components';

import cn from 'classnames';
import { useState } from 'react';

import { motion } from 'framer-motion';

export const Accordion = ({
  title,
  children,
  className,
  ...props
}: AccordionProps): JSX.Element => {
  const [isAccordionOpened, setIsAccordionOpened] = useState<boolean>(false);

  const variants = {
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 },
  };
  return (
    <div className={cn(styles.accordion, className)} {...props}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsAccordionOpened(!isAccordionOpened)}
      >
        <Htag className={styles.Htag} tag="h3">
          {title}
        </Htag>

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
        {children}
      </motion.div>
    </div>
  );
};
