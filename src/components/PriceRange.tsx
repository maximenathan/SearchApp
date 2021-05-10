import React from 'react';
import { BiDollar } from 'react-icons/bi';

import Restaurant from 'types/restaurant';

type Props = {
  priceRange?: Restaurant['price_range'];
};

const DollarIcon = () => <BiDollar className="w-6 h-6 text-rose-400" />;

const PriceComponent = ({ priceRange }: Props) => {
  switch (priceRange) {
    case '$30 and under':
      return <DollarIcon />;
    case '$31 to $50':
      return (
        <>
          <DollarIcon />
          <DollarIcon />
        </>
      );
    case '$50 and over':
      return (
        <>
          <DollarIcon />
          <DollarIcon />
          <DollarIcon />
        </>
      );
    default:
      return null;
  }
};

const PriceRange = (props: Props) => (
  <div className="flex">
    <PriceComponent {...props} />
  </div>
);

export default PriceRange;
