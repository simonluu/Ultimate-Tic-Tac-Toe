import React, { Component } from 'react';
import { connect } from 'react-redux'

import { playerMove } from '../actions';

import X from '../../client/images/x.png';
import O from '../../client/images/o.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderBoard = this.renderBoard.bind(this);
    this.renderInnerSquares = this.renderInnerSquares.bind(this);
    this.squareClick = this.squareClick.bind(this);
  }

  // on click methods
  squareClick(outerIndex, innerIndex) {
    // first if statement checks if the space on board has already been played or not.
    if (this.props.game.board[outerIndex][innerIndex] === "" && (this.props.game.playableBoard === null || this.props.game.playableBoard === outerIndex)) {
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
        <div key={i} className="outer-square">{this.renderInnerSquares(i)}</div>
      );
    }
    return board;
  }

  renderInnerSquares(outerIndex) {
    let innerBoard = [];
    for (let i = 0; i < 9; i++) {
      innerBoard.push(
        <div key={i} className={`inner-square ${outerIndex}-${i}`} dangerouslySetInnerHTML={{ __html: this.props.game.board[outerIndex][i] }} onClick={() => {this.squareClick(outerIndex, i)}}></div>
      );
    }
    return innerBoard;
  }

  render() {
    console.log(this.props.game)
    return (
      <div className="app-container">
        <h1>Ultimate Tic-Tac-Toe</h1>
        <div className="game-container">
          {this.renderBoard()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { game: state.game };
}

export default connect(mapStateToProps, { playerMove })(App);
