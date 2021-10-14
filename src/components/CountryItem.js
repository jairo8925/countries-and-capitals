import "./CountryItem.css";
import React from "react";

const CountryItem = ({ country, onCountryClick, option }) => {
  return (
    <div className='eight wide column center aligned'>
      <div
        className='ui huge segment country noselect'
        onClick={() => onCountryClick(option)}
      >
        {country.name}
        <img
          className='flag'
          alt={`Flag of ${country.name}`}
          src={country.flags.png}
        />
      </div>
    </div>
  );
};

export default CountryItem;
