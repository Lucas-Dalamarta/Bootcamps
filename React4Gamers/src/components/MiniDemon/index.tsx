import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import { IEnemyProps } from '../../contexts/canvas/helpers';

const MiniDemon = (props: IEnemyProps) => {
  const { position, direction } = useEnemyMoviment(props.initialPosition);

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position.y - HEAD_OFFSET,
        left: TILE_SIZE * position.x,

        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'mini-demo-animation 500ms steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default MiniDemon;
