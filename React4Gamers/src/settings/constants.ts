export const TILE_SIZE = 48;

export const GAME_SIZE = 20 * TILE_SIZE;

export const DEMON_TILE_SIZE = TILE_SIZE * 2;

export const HEAD_OFFSET = 12;

export enum EDirection {
UP = 'ArrowUp',
DOWN = 'ArrowDown',
RIGHT = 'ArrowRight',
LEFT ='ArrowLeft'
}

export enum EWalker {
    HERO = 'enemy',
    ENEMY = 'enemy'
}