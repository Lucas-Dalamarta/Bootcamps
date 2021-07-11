import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';
import { IEnemyProps } from '../../contexts/canvas/helpers';

const Trap = (props: IEnemyProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,

        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundImage: "url(./assets/TRAP.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 500ms steps(8) infinite'
      }}
    />
  );
};

export default Trap;
