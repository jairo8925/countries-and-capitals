import "./Game.css";
import React from "react";
import countriesService from "../apis/countries";
import CountryList from "./CountryList";

class Game extends React.Component {
  state = {
    capitalCity: "",
    countries: [],
    answer: null,
    score: 0,
  };

  componentDidMount() {
    this.setCountries();
  }

  setCountries = async () => {
    const response = await countriesService.get("/all");
    const res = this.getRandom(response.data, 4);
    let countries = res.map((r) => {
      return r.name;
    });
    const answer = Math.floor(Math.random() * res.length);
    const capitalCity = res[answer].capital;

    this.setState({
      capitalCity: capitalCity,
      countries: countries,
      answer: answer,
    });
  };

  getRandom(arr, n) {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  onCountryClick = (answer) => {
    if (answer === this.state.answer) {
      console.log("Correct!");
      this.setState((state) => ({ score: state.score + 1 }));
    } else {
      console.log("Wrong");
    }

    this.setCountries();
    this.setState({
      answer: Math.floor(Math.random() * 4),
    });
  };

  render() {
    return (
      <div className='ui container'>
        <div className='ui centered huge header'>{this.state.capitalCity}</div>
        <CountryList
          countries={this.state.countries}
          onCountryClick={this.onCountryClick}
        />
        <div>
          <h2 className='score'>{this.state.score}</h2>
        </div>
      </div>
    );
  }
}

export default Game;
