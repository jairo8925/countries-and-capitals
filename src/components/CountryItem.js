import React from "react";

const CountryItem = ({
  country,
  onCountryClick,
  option,
  answer,
  selectedCountry,
}) => {
  return (
    <div className='six wide column center aligned'>
      <div
        className='ui massive segment city'
        onClick={() => onCountryClick(option)}
        style={{
          backgroundColor: !selectedCountry
            ? "transparent"
            : selectedCountry === answer
            ? "green"
            : "red",
        }}
      >
        {country}
      </div>
    </div>
  );
};

export default CountryItem;
