import { FC } from 'react';
import { IconBase } from './base';
import * as T from '../types';

const path = (color: string) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M20.9425 7.05709C20.4218 6.53639 19.5776 6.53639 19.0569 7.05709L11.0569 15.0571C10.5362 15.5778 10.5362 16.422 11.0569 16.9427L19.0569 24.9427C19.5776 25.4634 20.4218 25.4634 20.9425 24.9427C21.4632 24.422 21.4632 23.5778 20.9425 23.0571L13.8853 15.9999L20.9425 8.94271C21.4632 8.42201 21.4632 7.57779 20.9425 7.05709Z"
    fill={color}
  />
);

const ArrowLeftIcon: FC<T.ExtendedIcon> = ({ color = '#000', size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: '0 0 32 32',
  });

export default ArrowLeftIcon;
