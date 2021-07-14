import "./Game.css";
import React from "react";
import countriesService from "../apis/countries";
import CountryList from "./CountryList";
import Map from "./Map";
import LoadingScreen from "./LoadingScreen";
import correctSoundEffect from "../sounds/correct.wav";
import wrongSoundEffect from "../sounds/wrong.wav";

class Game extends React.Component {
  state = {
    capitalCity: "",
    countries: [],
    options: [],
    answer: null,
    score: 0,
    countryInfo: null,
  };

  async componentDidMount() {
    const response = await countriesService.get("/all", {
      params: {
        fields:
          "name;capital;flag;languages;population;latlng;subregion;currencies",
      },
    });

    const toDelete = new Set(["Holy See"]);
    response.data = response.data.filter((obj) => !toDelete.has(obj.name));
    console.log(response.data);

    this.setState({
      countries: response.data.filter((item) => {
        return item.capital.length !== 0;
      }),
    });

    this.setCountries();
  }

  onCountryClick = (answer) => {
    let score = this.state.score;
    if (answer === this.state.answer) {
      // play correct answer sound
      new Audio(correctSoundEffect).play();
      score++;
    } else {
      // play wrong answer sound
      const audio = new Audio(wrongSoundEffect);
      audio.volume = 0.25;
      audio.play();
    }

    this.setState({
      score,
    });

    this.setCountries();
  };

  setCountries = () => {
    const options = this.chooseCountries(this.state.countries, 4);
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
      throw new RangeError(
        "chooseCountries: more elements taken than available"
      );
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
      <div className='ui container' style={{ paddingTop: "50px" }}>
        <div className='ui centered huge header capitalCity noselect'>
          {this.state.capitalCity}
        </div>
        <Map info={this.state.countryInfo} city={this.state.capitalCity} />
        <div className='ui huge header score noselect'>
          Score: {this.state.score}
        </div>
        <CountryList
          countries={this.state.options}
          onCountryClick={this.onCountryClick}
        />
      </div>
    );
  }
}

export default Game;
