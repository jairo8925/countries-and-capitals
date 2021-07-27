import "./Game.css";
import React from "react";
import countriesService from "../apis/countries";
import CountryList from "./CountryList";
import Map from "./Map";
import LoadingScreen from "./LoadingScreen";
import correctSoundEffect from "../sounds/correct.wav";
import wrongSoundEffect from "../sounds/wrong.wav";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      capitalCity: "",
      countries: [],
      options: [],
      answer: null,
      score: 0,
      countryInfo: null,
      total: 0,
      audio: true,
    };
  }

  async componentDidMount() {
    const response = await countriesService.get("/all", {
      params: {
        fields:
          "name;capital;flag;languages;population;latlng;subregion;currencies",
      },
    });

    const toDelete = new Set(["Holy See"]);
    response.data = response.data.filter((obj) => !toDelete.has(obj.name));
    const countries = response.data.filter((item) => {
      return item.capital.length !== 0;
    });

    this.setState({
      countries,
      history: countries,
      total: countries.length,
    });

    this.setCountries();
  }

  onCountryClick = (answer) => {
    let score = this.state.score;
    let audio;
    if (answer === this.state.answer) {
      audio = new Audio(correctSoundEffect);
      score++;
    } else {
      audio = new Audio(wrongSoundEffect);
      audio.volume = 0.15;
    }

    if (this.state.audio) {
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
    const index = countries.indexOf(options[answer]);
    countries.splice(index, 1);

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

  onResetClick = () => {
    this.setState({
      countries: this.state.history,
      capitalCity: "",
      options: [],
      answer: null,
      score: 0,
      countryInfo: null,
    });
    this.setCountries();
  };

  onAudioClick = () => {
    this.setState({
      audio: !this.state.audio,
    });
  };

  render() {
    if (!this.state.countryInfo) {
      return <LoadingScreen />;
    }

    let resetButton = (
      <div
        className='ui right floated secondary animated button resetButton'
        onClick={this.onResetClick}
        tabIndex='0'
      >
        <div className='visible content'>Reset</div>
        <div className='hidden content'>
          <i className='undo alternate icon'></i>
        </div>
      </div>
    );

    let audioButton;
    if (this.state.audio) {
      audioButton = (
        <button
          className='positive ui right floated button audioButton'
          onClick={this.onAudioClick}
        >
          Audio On
        </button>
      );
    } else {
      audioButton = (
        <button
          className='negative ui right floated button audioButton'
          onClick={this.onAudioClick}
        >
          Audio Off
        </button>
      );
    }

    return (
      <div className='ui container game'>
        <div className='three ui buttons buttons-container'>
          {audioButton}
          <button
            className='ui primary icon button'
            onClick={this.props.onHomeClick}
          >
            <i className='home icon'></i>
          </button>
          {resetButton}
        </div>
        <Map info={this.state.countryInfo} city={this.state.capitalCity} />
        <div className='ui centered huge header capital-city noselect'>
          {this.state.capitalCity}
        </div>
        <div className='ui score huge header noselect'>
          Score: {this.state.score}{" "}
          {this.state.total !== 0 ? `out of ${this.state.total}` : ""}{" "}
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
