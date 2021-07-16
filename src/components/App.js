import './App.css';
import React from 'react';
import Game from './Game.js';

class App extends React.Component {
  state = { running: false };

  onHomeClick = () => {
    this.setState({ running: false });
  };

  render() {
    if (this.state.running) {
      return <Game onHomeClick={this.onHomeClick} />;
    }

    return (
      <div className="home-container">
        <div className="title">
          <h1>Countries and Capitals</h1>
          <p>Choose which country the capital city belongs</p>
          <button
            className="ui start-button primary button"
            onClick={() => this.setState({ running: true })}
          >
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default App;
