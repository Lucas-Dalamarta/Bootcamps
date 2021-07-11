import React from 'react';
import { ECanvas } from '../../../contexts/canvas/helpers';
import { TILE_SIZE } from '../../../settings/constants';

interface ITileProps {
  initialPosition: { x: number; y: number },
  text: number
}

export default function Tile(props: ITileProps) {
  function getTileColor() {
    switch (props.text) {
      case ECanvas.FLOOR:
        return 'darkgrey';
      case ECanvas.WALL:
        return 'yellow';
      case ECanvas.DOOR:
        return 'white';
      case ECanvas.TRAP:
        return 'chartreuse';
      case ECanvas.MINI_DEMON:
      case ECanvas.DEMON:
        return 'red';
      case ECanvas.CHEST:
        return 'cyan'
      case ECanvas.HERO:
        return 'magenta';
    }
  }

return (
  <div
    style={{
      width: TILE_SIZE,
      height: TILE_SIZE,
      top: TILE_SIZE * props.initialPosition.y,
      left: TILE_SIZE * props.initialPosition.x,
      position: 'absolute',
      border: `3px solid ${getTileColor()}`,
      color: getTileColor(),
      fontSize: 32,
      zIndex : 2
    }}
  >
    {props.text}
  </div>
);
}