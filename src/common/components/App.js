import React, { Component } from 'react';

import X from '../../client/images/x.png';
import O from '../../client/images/o.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: true
    }

    this.renderBoard = this.renderBoard.bind(this);
    this.renderInnerSquares = this.renderInnerSquares.bind(this);
    this.squareClick = this.squareClick.bind(this);
  }

  // on click methods
  squareClick(outerIndex, innerIndex) {
    console.log(this.refs[`${outerIndex}-${innerIndex}`], this.state.turn)
    if (this.state.turn) {
      // set the square's html to X
      this.refs[`${outerIndex}-${innerIndex}`].innerHTML = `<img src=${X} height="50px" width="50px" />`;
    } else {
      // set the square's html to O
      this.refs[`${outerIndex}-${innerIndex}`].innerHTML = `<img src=${O} height="50px" width="50px" />`;
    }
    this.setState({ turn: !this.state.turn });
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
        <div key={i} ref={`${outerIndex}-${i}`} className={`inner-square ${outerIndex}-${i}`} onClick={() => {this.squareClick(outerIndex, i)}}></div>
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
      </div>
    );
  }
}

export default App;
