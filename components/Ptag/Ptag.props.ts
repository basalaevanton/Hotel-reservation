import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 's' | 'm' | 'l' | 'xl';
  bold?: boolean;
  children: ReactNode;
}
