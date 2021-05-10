import React from 'react';
import { Restaurant } from 'types/restaurant';
import cx from 'classnames';
import Rating from 'components/Rating';
import PriceRange from 'components/PriceRange';
import PhoneNumber from 'components/PhoneNumber';
import FoodType from 'components/FoodType';
import Location from 'components/Location';

type Props = {
  restaurant: Restaurant;
  onSelect: (id: string) => void;
  selected: boolean;
};

const RestaurantCard = ({ restaurant, onSelect, selected = false }: Props) => {
  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onSelect(restaurant.objectID);
  };

  return (
    <div
      className={cx(
        'w-72 h-80 rounded shadow-lg m-2 p-2 cursor-pointer hover:bg-purple-100 border-2 border-blue-50',
        {
          'border-purple-500 bg-purple-300 bg-purple-300': selected
        }
      )}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={handleSelect}
        className="flex flex-col h-full bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <div className="flex justify-between h-16">
          <h5 className="font-semibold text-yellow-600">
            {restaurant.name.toUpperCase()}
          </h5>
        </div>
        <FoodType foodType={restaurant.food_type} />
        <img
          className="object-cover h-32 py-2"
          src={restaurant.image_url}
          alt={restaurant.name}
        />
        <PhoneNumber phoneNumber={restaurant.phone_number} />
        <Location city={restaurant.city} country={restaurant.country} />
        <div className="flex justify-between mt-auto items-center">
          <div className="ml-2">
            <Rating initialRating={restaurant.rounded_stars_count} />
          </div>
          <PriceRange priceRange={restaurant.price_range} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
