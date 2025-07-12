import { FC } from 'react';
import { IconBase } from './base';
import * as T from '../types';

const path = (color: string) => (
  <path
    id="icon-fechar"
    d="M11.865,10.159l-4.41-4.41A1.206,1.206,0,0,0,5.749,7.455l4.41,4.41,1.706,1.706,4.41,4.41a1.206,1.206,0,0,0,1.706-1.706l-4.41-4.41Z"
    transform="translate(-7.631 9.149) rotate(-45)"
    fill={color}
    fillRule="evenodd"
  />
);

const DashIcon: FC<T.ExtendedIcon> = ({ color = '#000', size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: '0 0 18.298 18.298',
  });

export default DashIcon;
