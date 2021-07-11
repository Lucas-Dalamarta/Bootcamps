import useEventListener from '@use-it/event-listener';
import React from 'react';

import { EDirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';

export default function useHeroMoviment(initialPosition) {
const canvasContext = React.useContext(CanvasContext);
const chestsContext = React.useContext(ChestsContext);

const [positionState, updatePositionState] = React.useState(initialPosition);
const [directionState, updateDirectionState] = React.useState(EDirection.RIGHT);

	useEventListener('keydown', (e: any) => {
		const direction = e.key as EDirection;

		if (direction.indexOf('Arrow') === -1) {
			return;
		}

		const { nextMove, nextMovement } = canvasContext.updateCanvas(direction, positionState, EWalker.HERO);

		if (nextMove.valid) {
			updatePositionState(nextMovement);
			updateDirectionState(direction);
		};

		if (nextMove.dead) {
			alert(`You're dead!`);
			window.location.reload();
		};

		if (nextMove.chest) {
			chestsContext.updateOpenedChests(nextMovement);
		}

		if (chestsContext.totalChests === chestsContext.openedChests.total && nextMove.door) {
			alert(`You Won!`);
			window.location.reload();
		}
	});

	return {
		position: positionState,
		direction: directionState
	};
}
