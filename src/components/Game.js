import './Game.css';
import React from 'react';
import countriesService from '../apis/countries';
import CountryList from './CountryList';
import Map from './Map';
import LoadingScreen from './LoadingScreen';

class Game extends React.Component {
  state = {
    capitalCity: '',
    countries: [],
    options: [],
    answer: null,
    score: 0,
    countryInfo: null,
  };

  async componentDidMount() {
    const response = await countriesService.get('/all', {
      params: {
        fields:
          'name;capital;flag;languages;population;latlng;subregion;currencies',
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
    this.setState({
      score:
        answer === this.state.answer ? this.state.score + 1 : this.state.score,
    });

    this.setCountries();
  };

  setCountries = () => {
    const options = this.chooseCountries(this.state.countries, 4);
    console.log(options);
    const answer = Math.floor(Math.random() * options.length);
    const capitalCity = options[answer].capital;

    let countries = this.state.countries;
    if (this.state.countries.length > 4) {
      const index = countries.indexOf(options[answer]);
      countries.splice(index, 1);
    }

    const countryInfo = options[answer];

    this.setState({
      countryInfo,
      countries,
      capitalCity,
      answer,
      options,
    });
  };

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
    if (!this.state.countryInfo) {
      return <LoadingScreen />;
    }

    return (
      <div className="ui container" style={{ paddingTop: '50px' }}>
        <div className="ui centered huge capitalCity">
          {this.state.capitalCity}
        </div>
        <Map info={this.state.countryInfo} city={this.state.capitalCity} />
        <div className="score">Score: {this.state.score}</div>
        <CountryList
          countries={this.state.options}
          onCountryClick={this.onCountryClick}
        />
      </div>
    );
  }
}

export default Game;
