import React from 'react';

import { GAME_SIZE } from '../../settings/constants';

import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { canvas, ECanvas } from '../../contexts/canvas/helpers';
import { ChestsContext } from '../../contexts/chests';

function getCanvasMap() {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      switch (text) {
        case ECanvas.TRAP:
          array.push(<Trap key={key} initialPosition={position} />);
          break;
        case ECanvas.MINI_DEMON:
          array.push(<MiniDemon key={key} initialPosition={position} />);
          break;
        case ECanvas.DEMON:
          array.push(<Demon key={key} initialPosition={position} />);
          break;
        case ECanvas.CHEST:
          array.push(<Chest key={key} initialPosition={position} />);
          break;
        case ECanvas.HERO:
          array.push(<Hero key={key} initialPosition={position} />);
          break;
      }
    }
  }

  return array;
}

const elements = getCanvasMap();


const Board = () => {
  const chestsContext = React.useContext(ChestsContext);

  function renderOpenedDoor() {
    return (
      <img
        src="./assets/DOOR-OPEN.png"
        alt=""
        style={{
          position: 'absolute',
          left: 578,
          top: 0,
        }}
      />
    )
  }
  return (
    <div>
      {elements}

      {
        chestsContext.totalChests === chestsContext.openedChests.total 
        && (renderOpenedDoor())
      }

      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
};

export default Board;
