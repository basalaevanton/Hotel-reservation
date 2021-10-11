import { SidebarSearchProps } from './SidebarSearch.props';
import styles from './SidebarSearch.module.scss';

import cn from 'classnames';
import React, { useState } from 'react';
import { SidebarSearchForm } from '../../components';
import { useRouter } from 'next/router';
import { Htag, Rating } from '../../componentsUI';
export const SidebarSearch = ({
  className,
  ...props
}: SidebarSearchProps): JSX.Element => {
  const [rating, setRating] = useState<number>(3);

  const router = useRouter();
  // router.push(router.asPath + '?123');
  // console.log(router.asPath+'123');

  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Htag tag="h3">Категория отеля</Htag>
      <Rating isEditable rating={rating} setRating={setRating} />
      
    </div>
  );
};
