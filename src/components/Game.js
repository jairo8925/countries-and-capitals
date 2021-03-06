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
      attempts: 0,
      audio: true,
    };
  }

  async componentDidMount() {
    const response = await countriesService.get("/all", {});
    // Delete dependencies from question set (no easy way to do this at the moment :P)
    const toDelete = new Set([
      "Åland Islands",
      "American Samoa",
      "Anguilla",
      "Aruba",
      "Azerbaijan",
      "Bermuda",
      "Bonaire, Sint Eustatius and Saba",
      "Bouvet Island",
      "British Indian Ocean Territory",
      "United States Minor Outlying Islands",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Cayman Islands",
      "Cocos (Keeling) Islands",
      "Christmas Island",
      "Cook Islands",
      "Curaçao",
      "Falkland Islands (Malvinas)",
      "Faroe Islands",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gibraltar",
      "Guadeloupe",
      "Guam",
      "Guernsey",
      "Heard Island and McDonald Islands",
      "Holy See",
      "Isle of Man",
      "Jersey",
      "Macao",
      "Martinique",
      "Mayotte",
      "Montserrat",
      "New Caledonia",
      "Norfolk Island",
      "Northern Mariana Islands",
      "Réunion",
      "Saint Barthélemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Martin (French part)",
      "Saint Pierre and Miquelon",
      "Sint Maarten (Dutch part)",
      "South Georgia and the South Sandwich Islands",
      "Svalbard and Jan Mayen",
      "Tokelau",
      "Turks and Caicos Islands",
      "Uzbekistan",
      "Wallis and Futuna",
      "Western Sahara",
    ]);
    response.data = response.data.filter((obj) => !toDelete.has(obj.name));
    const countries = response.data.filter((item) => {
      return item.capital && item.capital.length !== 0;
    });

    // countries.forEach((e) => console.log(e.name));

    this.setState({
      countries,
      history: countries,
      total: countries.length - 4,
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
      attempts: this.state.attempts + 1,
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
      attempts: 0,
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

    if (this.state.countries.length - 4 === 0) {
      return (
        <div className='score-container'>
          <div className='final-score'>
            <h1>
              Final Score: {this.state.score} out of {this.state.total}
            </h1>
            <button
              className='ui start-over-button primary button'
              onClick={this.onResetClick}
            >
              Start Over
            </button>
          </div>
        </div>
      );
    }

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
          {this.state.attempts !== 0
            ? `out of ${this.state.total} (${
                this.state.attempts - this.state.score
              } wrong)`
            : ""}{" "}
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
