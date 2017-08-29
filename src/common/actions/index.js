// import { generate } from 'shortid';

export const PLAYER_MOVE = "PLAYER_MOVE";
export const INNER_WIN = "INNER_WIN";
export const GAME_WIN = "GAME_WIN"

export function playerMove(outerIndex, innerIndex, data) {
  return {
    type: PLAYER_MOVE,
    payload: { outerIndex, innerIndex, data },
  }
}

export function innerWin(outerIndex) {
  return {
    type: INNER_WIN,
    payload: { outerIndex, data: null }
  }
}

export function gameWin() {
  return {
    type: GAME_WIN,
    payload: true
  }
}