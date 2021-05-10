import React from 'react';
import Restaurant from 'types/restaurant';

type Props = {
  city: Restaurant['city'];
  country: Restaurant['country'];
};

const Location = ({ city, country }: Props) => (
  <p className="italic text-gray-700 text-opacity-50">
    {country} - {city}
  </p>
);

export default Location;
