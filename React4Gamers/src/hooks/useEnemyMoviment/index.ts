import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';

export default function useEnemyMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext);

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionState, updateDirectionState] = React.useState(EDirection.RIGHT);

    useInterval(function move() {
        const random = Math.floor(Math.random() * 4);
        const directionArray = Object.values(EDirection);
        const randomDirection = directionArray[random];

        const {nextMove, nextMovement} = canvasContext.updateCanvas(randomDirection, positionState, EWalker.ENEMY)

        if (nextMove.valid) {
            updatePositionState(nextMovement);
            updateDirectionState(randomDirection);
        };

        if(nextMove.dead){
            alert(`You're dead!`);
        }
    }, 2000);

    return {
        position: positionState,
        direction :directionState
    };
}
