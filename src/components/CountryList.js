import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({ countries, onCountryClick }) => {
  return (
    <div className='ui two centered grid'>
      <div className='sixteen column centered row'>
        <div className='six wide column center aligned'>
          <div
            className='ui massive segment city'
            onClick={() => onCountryClick(0)}
          >
            {countries[0]}
          </div>
        </div>
        <div className='six wide column center aligned'>
          <div
            className='ui massive segment city'
            onClick={() => onCountryClick(1)}
          >
            {countries[1]}
          </div>
        </div>
      </div>
      <div className='sixteen column centered row'>
        <div className='six wide column center aligned'>
          <div
            className='ui massive segment city'
            onClick={() => onCountryClick(2)}
          >
            {countries[2]}
          </div>
        </div>
        <div className='six wide column center aligned'>
          <div
            className='ui massive segment city'
            onClick={() => onCountryClick(3)}
          >
            {countries[3]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
