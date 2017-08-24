// import { generate } from 'shortid';

export const PLAYER_MOVE = 'PLAYER_MOVE';

export function playerMove(outerIndex, innerIndex, data) {
  return {
    type: PLAYER_MOVE,
    payload: { outerIndex, innerIndex, data },
  }
}