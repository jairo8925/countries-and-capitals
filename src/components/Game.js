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
    selectedCountry: null,
  };

  componentDidMount() {
    this.setCountries();
  }

  setCountries = async () => {
    const response = await countriesService.get("/all", {
      params: {
        fields: "name;capital",
      },
    });
    const countriesList = this.chooseCountries(response.data, 4);
    let countries = countriesList.map((r) => {
      return r.name;
    });

    const answer = this.chooseAnswer(countriesList);
    console.log("Answer:", answer);
    const capitalCity = countriesList[answer].capital;

    this.setState({
      capitalCity: capitalCity,
      countries: countries,
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
      console.log("Correct.");
      this.setState((state) => ({ score: state.score + 1 }));
    } else {
      console.log("Wrong.");
    }

    this.setState(
      {
        selectedCountry: answer,
      },
      () => console.log("Selected option", this.state.selectedCountry)
    );

    this.setCountries();
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
