import React from 'react';

import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useHeroMovement from '../../hooks/useHeroMoviment';

import './index.css';

export interface ICharactherProps {
  initialPosition: { x: number; y: number },
}

const Hero = (props: ICharactherProps) => {
  const { position, direction } = useHeroMovement(props.initialPosition);

  return (
    <div
      style={{
        position: 'absolute',

        left: TILE_SIZE * position.x,
        top: TILE_SIZE * position.y - HEAD_OFFSET,

        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'hero-animation 500ms steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}
    />
  );
};

export default Hero;
