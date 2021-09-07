import { RangeInputProps } from './RangeInput.props';
import styles from './RangeInput.module.scss';

import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';

export const RangeInput = ({
  min,
  max,
  onChange,
  className,
  ...props
}: RangeInputProps): JSX.Element => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={cn(styles.thumb, styles.thumbLeft)}
        style={{ zIndex: minVal > max - 100 ? 5 : 3 }}
      />
      <input
        type="range"
        min={min}
        max={max}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={cn(styles.thumb, styles.thumbRight)}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div ref={range} className={styles.slider__range} />
        <div className={styles.slider__leftValue}>{minVal}</div>
        <div className={styles.slider__rightValue}>{maxVal}</div>
      </div>
    </div>
  );
};
