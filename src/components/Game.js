import React from 'react';
import faker from 'faker';
import './Game.css';

class Game extends React.Component {
  state = {
    capitalCity: faker.address.city(),
    countries: [
      faker.address.country(),
      faker.address.country(),
      faker.address.country(),
      faker.address.country(),
    ],
    answer: Math.floor(Math.random() * 4),
    score: 0,
  };

  onCountryClick = (answer) => {
    if (answer === this.state.answer) {
      console.log('Correct!');
      this.setState((state) => ({ score: state.score + 1 }));
    } else {
      console.log('Wrong');
    }
  };

  componentDidUpdate() {
    console.log('Update');
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui centered huge header">{this.state.capitalCity}</div>
        <div className="ui two centered grid">
          <div className="sixteen column centered row">
            <div className="six wide column center aligned">
              <div
                className="ui massive segment city"
                onClick={() => this.onCountryClick(0)}
              >
                {this.state.countries[0]}
              </div>
            </div>
            <div className="six wide column center aligned">
              <div
                className="ui massive segment city"
                onClick={() => this.onCountryClick(1)}
              >
                {this.state.countries[1]}
              </div>
            </div>
          </div>
          <div className="sixteen column centered row">
            <div className="six wide column center aligned">
              <div
                className="ui massive segment city"
                onClick={() => this.onCountryClick(2)}
              >
                {this.state.countries[2]}
              </div>
            </div>
            <div className="six wide column center aligned">
              <div
                className="ui massive segment city"
                onClick={() => this.onCountryClick(3)}
              >
                {this.state.countries[3]}
              </div>
            </div>
          </div>
        </div>
        <div>{this.state.score}</div>
      </div>
    );
  }
}

export default Game;
