import './Game.css';
import React from 'react';
import countriesService from '../apis/countries';
import CountryList from './CountryList';
import LoadingScreen from './LoadingScreen';

class Game extends React.Component {
  state = {
    capitalCity: '',
    countries: [],
    options: [],
    answer: null,
    score: 0,
  };

  async componentDidMount() {
    const response = await countriesService.get('/all', {
      params: {
        fields: 'name;capital',
      },
    });

    this.setState({
      countries: response.data.filter((item) => {
        return item.capital.length !== 0;
      }),
    });

    this.setCountries();
  }

  onCountryClick = (answer) => {
    // console.log(answer);

    this.setState(
      {
        score:
          answer === this.state.answer
            ? this.state.score + 1
            : this.state.score,
      },
      () => console.log('Selected option', this.state.selectedCountry)
    );

    this.setCountries();
  };

  setCountries = () => {
    let options = this.chooseCountries(this.state.countries, 4);
    // console.log('Options:', options);
    const answer = this.chooseAnswer(options);
    // console.log('Answer:', answer);
    const capitalCity = options[answer].capital;

    this.setState({
      capitalCity: capitalCity,
      options: options.map((item) => {
        return item.name;
      }),
      answer: answer,
    });
  };

  chooseAnswer(arr) {
    let answer = Math.floor(Math.random() * arr.length);
    let capitalCity = arr[answer].capital;
    while (!capitalCity) {
      answer = (answer + 1) % 4;
      capitalCity = arr[answer].capital;
    }
    return answer;
  }

  chooseCountries(arr, n) {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError('getRandom: more elements taken than available');
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  render() {
    // if (!this.state.capitalCity) {
    //   return <LoadingScreen />;
    // }

    return (
      <div className="ui container">
        <div className="ui centered huge header">{this.state.capitalCity}</div>
        <CountryList
          countries={this.state.options}
          onCountryClick={this.onCountryClick}
        />
        <div>
          <h2 className="score">{this.state.score}</h2>
        </div>
      </div>
    );
  }
}

export default Game;
