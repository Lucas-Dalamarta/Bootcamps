import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';
import { IEnemyProps } from '../../contexts/canvas/helpers';
import { ChestsContext } from '../../contexts/chests';

const Chest = (props: IEnemyProps) => {
  const chestsContext = React.useContext(ChestsContext);

  const shouldAnimate = chestsContext.openedChests.positions.find((position) => {
    return props.initialPosition.y === position.y && props.initialPosition.x === position.x;
  }) 

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,

        width: TILE_SIZE,
        height: TILE_SIZE,

        backgroundImage: "url(./assets/CHEST.png)",
        backgroundRepeat: 'no-repeat',
        animation: shouldAnimate && 'chest-animation 500ms steps(2) forwards'
      }}
    />
  );
};

export default Chest;
