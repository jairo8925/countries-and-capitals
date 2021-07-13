import './CountryItem.css';
import React from 'react';

const CountryItem = ({ country, onCountryClick, option }) => {
  return (
    <div className="six wide column center aligned">
      <div
        className="ui huge segment city noselect"
        onClick={() => onCountryClick(option)}
      >
        {country}
      </div>
    </div>
  );
};

export default CountryItem;
