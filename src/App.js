import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score';
import MathGame from './MathGame';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state= {
      numQuestions : 0,
      numCorrect : 0
    };
  }

  handleScore= (answerCorrectly)=>{
    if(answerCorrectly){
      this.setState((previousState) => ({
        numCorrect : previousState.numCorrect + 1
      }));
    }
    this.setState((previousState) => ({
      numQuestions : previousState.numQuestions + 1
    }));

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <MathGame handleScore={this.handleScore}/>
          <Score numCorrect= {this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
