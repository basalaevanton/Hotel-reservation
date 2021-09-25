import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'onAnimationStart' | 'onDragStart' | 'OnDragEnd' | 'onDrag' | 'ref'
  > {
  children?: ReactNode;
  appearance?: 'primary' | 'ghost';
  pagination?: 'primary'|'active';
  border?: 'primary' | 'ghost';
  arrow?: 'right' | 'none';
  unactive?: boolean;
}
