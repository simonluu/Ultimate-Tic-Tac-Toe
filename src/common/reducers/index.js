import { combineReducers } from 'redux';

function gameReducer(state = '', action) {
  switch (action.type) {
    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;