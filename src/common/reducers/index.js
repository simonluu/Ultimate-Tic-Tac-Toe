import { combineReducers } from 'redux';

import { PLAYER_MOVE } from '../actions';

const initialGameState = {
  board: []
};

for (let i = 0; i < 9; i++) {
  initialGameState.board.push([]);
  for (let j = 0; j < 9; j++) {
    initialGameState.board[i].push("");
  }
}

function gameReducer(state = initialGameState, action) {
  switch (action.type) {
    case PLAYER_MOVE:
      return {
        ...state,
        board: state.board.map(
          (board, outerIndex) => outerIndex === action.payload.outerIndex ?
            board.map((inner, innerIndex) => innerIndex === action.payload.innerIndex ?
              action.payload.data : inner) : board
        )
      };
    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;