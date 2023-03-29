import React from 'react';
import './Country.css';

const Country = (props) => {
  // console.log(props);
  const {area, population, region, name, flags} = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt={name.common} />
      <h3>Name: {name.common}</h3>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;