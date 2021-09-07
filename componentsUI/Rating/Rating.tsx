import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';

import cn from 'classnames';
import {
  useState,
  useEffect,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from 'react';

import StarIcon from './star.svg';
import StarBorderIcon from './star_border.svg';

export const Rating = forwardRef(
  (
    { isEditable = false, rating, error, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return i < currentRating ? (
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && hanldeSpace(i + 1, e)
            }
          />
        ) : (
          <StarBorderIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && hanldeSpace(i + 1, e)
            }
          />
        );
      });
      setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };
    const hanldeSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
      if (e.code != 'Space' || !setRating) {
        return;
      }
      setRating(i);
    };

    return (
      <div
        className={cn(styles.ratingWrapper, { [styles.error]: error })}
        {...props}
        ref={ref}
      >
        {ratingArray.map((rat, i) => (
          <span
            className={cn(styles.star, {
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
            key={i}
          >
            {rat}
          </span>
        ))}
      </div>
    );
  }
);
