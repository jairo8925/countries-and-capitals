import './Game.css';
import React from 'react';
import countriesService from '../apis/countries';
import CountryList from './CountryList';
import Map from './Map';

class Game extends React.Component {
  state = {
    capitalCity: '',
    lat: null,
    long: null,
    countries: [],
    flags: [],
    options: [],
    answer: null,
    score: 0,
  };

  async componentDidMount() {
    const response = await countriesService.get('/all', {
      params: {
        fields: 'name;capital;latlng;flag',
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
    const countriesList = this.chooseCountries(this.state.countries, 4);
    const answer = Math.floor(Math.random() * countriesList.length);
    const capitalCity = countriesList[answer].capital;
    const lat = countriesList[answer].latlng[0];
    const long = countriesList[answer].latlng[1];

    let countries = this.state.countries;
    if (this.state.countries.length > 4) {
      const index = countries.indexOf(countriesList[answer]);
      countries.splice(index, 1);
    }

    const flags = [];
    const options = [];

    countriesList.forEach((i) => {
      options.push(i.name);
      flags.push(i.flag);
    });

    this.setState({
      countries,
      capitalCity,
      lat,
      long,
      answer,
      options,
      flags,
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
    return (
      <div className="ui container" style={{ paddingTop: '50px' }}>
        <div className="ui centered huge capitalCity">
          {this.state.capitalCity}
        </div>
        <Map
          city={this.state.capitalCity}
          lat={this.state.lat}
          long={this.state.long}
        />
        <div>
          <h2 className="score">Score: {this.state.score}</h2>
        </div>
        <CountryList
          flags={this.state.flags}
          countries={this.state.options}
          onCountryClick={this.onCountryClick}
        />
      </div>
    );
  }
}

export default Game;
