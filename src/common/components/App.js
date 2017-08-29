import React, { Component } from 'react';
import { connect } from 'react-redux'

import { playerMove, innerWin, gameWin } from '../actions';

import X from '../../client/images/x.png';
import O from '../../client/images/o.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderBoard = this.renderBoard.bind(this);
    this.renderInnerSquares = this.renderInnerSquares.bind(this);
    this.squareClick = this.squareClick.bind(this);
  }

  // lifecycle methods
  componentDidUpdate() {
    /*
      indexes 0, 1, 2 are the same or indexes 3, 4, 5 are the same, or indexes 6, 7, 8
      indexes 0, 3, 6 are the same or indexes 1, 4, 7 are the same or indexes 2, 5, 8
      indexes 0, 4, 8 are the same or indexes 2, 4, 6

    */
    // Loops through to check if a player has won any of the boards.
    for (let i = 0; i < 9; i++) {
      if (this.props.game.boardWin[i] === null) {
        if ((this.props.game.board[i][0] && this.props.game.board[i][1] && this.props.game.board[i][2])
          || (this.props.game.board[i][0] === false && this.props.game.board[i][1] === false && this.props.game.board[i][2] === false)
          || (this.props.game.board[i][3] && this.props.game.board[i][4] && this.props.game.board[i][5])
          || (this.props.game.board[i][3] === false && this.props.game.board[i][4] === false && this.props.game.board[i][5] === false)
          || (this.props.game.board[i][6] && this.props.game.board[i][7] && this.props.game.board[i][8])
          || (this.props.game.board[i][6] === false && this.props.game.board[i][7] === false && this.props.game.board[i][8] === false)
          || (this.props.game.board[i][0] && this.props.game.board[i][3] && this.props.game.board[i][6])
          || (this.props.game.board[i][0] === false && this.props.game.board[i][3] === false && this.props.game.board[i][6] === false)
          || (this.props.game.board[i][1] && this.props.game.board[i][4] && this.props.game.board[i][7])
          || (this.props.game.board[i][1] === false && this.props.game.board[i][4] === false && this.props.game.board[i][7] === false)
          || (this.props.game.board[i][2] && this.props.game.board[i][5] && this.props.game.board[i][8])
          || (this.props.game.board[i][2] === false && this.props.game.board[i][5] === false && this.props.game.board[i][8] === false)
          || (this.props.game.board[i][0] && this.props.game.board[i][4] && this.props.game.board[i][8])
          || (this.props.game.board[i][0] === false && this.props.game.board[i][4] === false && this.props.game.board[i][8] === false)
          || (this.props.game.board[i][2] && this.props.game.board[i][4] && this.props.game.board[i][6])
          || (this.props.game.board[i][2] === false && this.props.game.board[i][4] === false && this.props.game.board[i][6] === false)) {
          this.props.innerWin(i);
        }
      }
    }

    if (!this.props.game.gameWin) {
      if ((this.props.game.boardWin[0] && this.props.game.boardWin[1] && this.props.game.boardWin[2])
        || (this.props.game.boardWin[0] === false && this.props.game.boardWin[1] === false && this.props.game.boardWin[2] === false)
        || (this.props.game.boardWin[3] && this.props.game.boardWin[4] && this.props.game.boardWin[5])
        || (this.props.game.boardWin[3] === false && this.props.game.boardWin[4] === false && this.props.game.boardWin[5] === false)
        || (this.props.game.boardWin[6] && this.props.game.boardWin[7] && this.props.game.boardWin[8])
        || (this.props.game.boardWin[6] === false && this.props.game.boardWin[7] === false && this.props.game.boardWin[8] === false)
        || (this.props.game.boardWin[0] && this.props.game.boardWin[3] && this.props.game.boardWin[6])
        || (this.props.game.boardWin[0] === false && this.props.game.boardWin[3] === false && this.props.game.boardWin[6] === false)
        || (this.props.game.boardWin[1] && this.props.game.boardWin[4] && this.props.game.boardWin[7])
        || (this.props.game.boardWin[1] === false && this.props.game.boardWin[4] === false && this.props.game.boardWin[7] === false)
        || (this.props.game.boardWin[2] && this.props.game.boardWin[5] && this.props.game.boardWin[8])
        || (this.props.game.boardWin[2] === false && this.props.game.boardWin[5] === false && this.props.game.boardWin[8] === false)
        || (this.props.game.boardWin[0] && this.props.game.boardWin[4] && this.props.game.boardWin[8])
        || (this.props.game.boardWin[0] === false && this.props.game.boardWin[4] === false && this.props.game.boardWin[8] === false)
        || (this.props.game.boardWin[2] && this.props.game.boardWin[4] && this.props.game.boardWin[6])
        || (this.props.game.boardWin[2] === false && this.props.game.boardWin[4] === false && this.props.game.boardWin[6] === false)) {
        this.props.gameWin();
      }
    }
  }

  // on click methods
  squareClick(outerIndex, innerIndex) {
    // first if statement checks if the space on board has already been played or not.
    if (!this.props.game.gameWin && this.props.game.boardWin[outerIndex] === null && this.props.game.boardImage[outerIndex][innerIndex] === "" && (this.props.game.playableBoard === null || this.props.game.playableBoard === outerIndex)) {
      if (this.props.game.turn) {
        // set the square's html to X
        this.props.playerMove(outerIndex, innerIndex, `<img src=${X} height="50px" width="50px" />`);
      } else {
        // set the square's html to O
        this.props.playerMove(outerIndex, innerIndex, `<img src=${O} height="50px" width="50px" />`);
      }
    }
  }

  // render methods
  renderBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push(
        <div key={i} className={`outer-square ${this.props.game.boardWin[i] === true ? "x-win" : this.props.game.boardWin[i] === false ? "o-win" : ""}`}>{this.renderInnerSquares(i)}</div>
      );
    }
    return board;
  }

  renderInnerSquares(outerIndex) {
    let innerBoard = [];
    for (let i = 0; i < 9; i++) {
      innerBoard.push(
        <div key={i} className={`inner-square ${outerIndex}-${i}`} dangerouslySetInnerHTML={{ __html: this.props.game.boardImage[outerIndex][i] }} onClick={() => {this.squareClick(outerIndex, i)}}></div>
      );
    }
    return innerBoard;
  }

  render() {
    return (
      <div className="app-container">
        <h1>Ultimate Tic-Tac-Toe</h1>
        <div className="game-container">
          {this.renderBoard()}
        </div>
        {this.props.game.gameWin ? <div>Game Over, Click HERE to Restart</div> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { game: state.game };
}

export default connect(mapStateToProps, { playerMove, innerWin, gameWin })(App);
