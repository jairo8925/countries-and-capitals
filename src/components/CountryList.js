import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({
  countries,
  onCountryClick,
  answer,
  selectedCountry,
  disabled,
}) => {
  return (
    <div className='ui two centered grid'>
      <div className='sixteen column centered row'>
        <CountryItem
          country={countries[0]}
          onCountryClick={onCountryClick}
          option={0}
          answer={answer}
          selectedCountry={selectedCountry}
          disabled={disabled}
        />
        <CountryItem
          country={countries[1]}
          onCountryClick={onCountryClick}
          option={1}
          answer={answer}
          selectedCountry={selectedCountry}
          disabled={disabled}
        />
      </div>
      <div className='sixteen column centered row'>
        <CountryItem
          country={countries[2]}
          onCountryClick={onCountryClick}
          option={2}
          answer={answer}
          selectedCountry={selectedCountry}
          disabled={disabled}
        />
        <CountryItem
          country={countries[3]}
          onCountryClick={onCountryClick}
          option={3}
          answer={answer}
          selectedCountry={selectedCountry}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CountryList;
