import { combineReducers } from 'redux';

import { PLAYER_MOVE, INNER_WIN, GAME_WIN } from '../actions';

const initialGameState = {
  turn: true,
  playableBoard: null,
  board: [],
  boardImage: [],
  boardWin: [],
  gameWin: false
};

for (let i = 0; i < 9; i++) {
  initialGameState.board.push([]);
  initialGameState.boardImage.push([]);
  initialGameState.boardWin.push(null);
  for (let j = 0; j < 9; j++) {
    initialGameState.board[i].push(null);
    initialGameState.boardImage[i].push("");
  }
}

function gameReducer(state = initialGameState, action) {
  switch (action.type) {
    case PLAYER_MOVE:
      return {
        ...state,
        turn: !state.turn,
        playableBoard: state.boardWin[action.payload.innerIndex] === null ? action.payload.innerIndex : null,
        board: state.board.map(
          (board, outerIndex) => outerIndex === action.payload.outerIndex ?
            board.map((inner, innerIndex) => innerIndex === action.payload.innerIndex ?
              state.turn : inner) : board
        ),
        boardImage: state.boardImage.map(
          (boardImage, outerIndex) => outerIndex === action.payload.outerIndex ?
            boardImage.map((inner, innerIndex) => innerIndex === action.payload.innerIndex ?
              action.payload.data : inner) : boardImage
        )
      };
    case INNER_WIN:
      return {
        ...state,
        playableBoard: state.boardWin[action.payload.outerIndex] !== null ? state.playableBoard : null,
        boardWin: state.boardWin.map(
          (board, outerIndex) => outerIndex === action.payload.outerIndex ? !state.turn : board
        )
      };
    case GAME_WIN:
      return {
        ...state,
        gameWin: action.payload
      }
    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;