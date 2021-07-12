import React from "react";

const CountryItem = ({
  country,
  onCountryClick,
  option,
  answer,
  selectedCountry,
  disabled,
}) => {
  return (
    <div className='six wide column center aligned'>
      <div
        className='ui massive segment city'
        onClick={() => onCountryClick(option)}
        disabled={disabled}
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
