import React from 'react';
import CountryItem from './CountryItem';

const CountryList = ({ countries, onCountryClick, answer, flags }) => {
  return (
    <div className="ui two centered grid">
      <div className="sixteen column centered row">
        <CountryItem
          country={countries[0]}
          onCountryClick={onCountryClick}
          option={0}
          answer={answer}
          flag={flags[0]}
        />
        <CountryItem
          country={countries[1]}
          onCountryClick={onCountryClick}
          option={1}
          answer={answer}
          flag={flags[1]}
        />
      </div>
      <div className="sixteen column centered row">
        <CountryItem
          country={countries[2]}
          onCountryClick={onCountryClick}
          option={2}
          answer={answer}
          flag={flags[2]}
        />
        <CountryItem
          country={countries[3]}
          onCountryClick={onCountryClick}
          option={3}
          answer={answer}
          flag={flags[3]}
        />
      </div>
    </div>
  );
};

export default CountryList;
