import './CountryItem.css';
import React from 'react';

const CountryItem = ({ country, onCountryClick, option, flag }) => {
  return (
    <div className="eight wide column center aligned">
      <div
        className="ui huge segment country noselect"
        onClick={() => onCountryClick(option)}
      >
        {country}
        <img className="flag" alt={`Flag of ${country}`} src={flag} />
      </div>
    </div>
  );
};

export default CountryItem;
