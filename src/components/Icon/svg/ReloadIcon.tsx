import { FC } from 'react';
import { IconBase } from './base';
import * as T from '../types';

const path = (color: string) => (
  <g>
    <path
      id="Caminho_34059"
      data-name="Caminho 34059"
      d="M9.168,4.233a6.267,6.267,0,1,0,5.911,8.356.783.783,0,0,1,1.477.522,7.836,7.836,0,1,1-2.165-8.45c.167.149,1.085.991,1.991,1.834.454.423.908.849,1.267,1.192.179.171.337.324.459.447a3.967,3.967,0,0,1,.3.32L17.248,9.5,13.338,5.823A6.241,6.241,0,0,0,9.168,4.233Z"
      transform="translate(-1.334 -2.667)"
      fill={color}
      fillRule="evenodd"
    />
    <path
      id="Caminho_34060"
      data-name="Caminho 34060"
      d="M25.484,4a.783.783,0,0,1,.783.783v4.7a.783.783,0,0,1-.783.783h-4.7a.783.783,0,0,1,0-1.567H24.7V4.783A.783.783,0,0,1,25.484,4Z"
      transform="translate(-9.033 -3.216)"
      fill={color}
      fillRule="evenodd"
    />
  </g>
);

const ReloadIcon: FC<T.ExtendedIcon> = ({ color = '#000', size }) =>
  IconBase({
    path: path(color),
    size,
    viewBox: '0 0 17.234 15.667',
  });

export default ReloadIcon;
