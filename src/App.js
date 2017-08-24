import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderBoard = this.renderBoard.bind(this);
    this.renderInnerSquares = this.renderInnerSquares.bind(this);
    this.squareClick = this.squareClick.bind(this);
  }

  // on click methods
  squareClick(outerIndex, innerIndex) {
    console.log(outerIndex, innerIndex);
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
        <div key={i} className="inner-square" onClick={() => {this.squareClick(outerIndex, i)}}></div>
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
