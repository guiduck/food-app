import { FC } from 'react';
import { IconBase } from './base';
import * as T from '../types';

const path = (color: string) => (
  <path
    d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    fill={color}
  />
);

const InfoIcon: FC<T.ExtendedIcon> = ({ color = '#000', size }) =>
  IconBase({
    path: path(color),
    size,
  });

export default InfoIcon;
