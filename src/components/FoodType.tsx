import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import {
  GiAnimalHide,
  GiSushis,
  GiSeahorse,
  GiWineBottle,
  GiPolarBear,
  GiTacos,
  GiAmericanFootballHelmet,
  GiOpenedFoodCan
} from 'react-icons/gi';

import Restaurant from 'types/restaurant';

type Props = {
  foodType: Restaurant['food_type'];
};

const FoodIcon = ({ foodType }: Props) => {
  switch (foodType) {
    case 'American':
      return <FaHamburger className="w-6 h-6 text-purple-600" />;
    case 'Seafood':
      return <GiSeahorse className="w-6 h-6 text-purple-600" />;
    case 'Fine Dining':
      return <GiWineBottle className="w-6 h-6 text-purple-600" />;
    case 'Japanese':
      return <GiSushis className="w-6 h-6 text-purple-600" />;
    case 'Steak':
      return <GiAnimalHide className="w-6 h-6 text-purple-600" />;
    case 'Mexican':
      return <GiTacos className="w-6 h-6 text-purple-600" />;
    case 'Californian':
      return <GiPolarBear className="w-6 h-6 text-purple-600" />;
    case 'Contemporary american':
      return <GiAmericanFootballHelmet className="w-6 h-6 text-purple-600" />;
    case 'Italian':
      return <FaPizzaSlice className="w-6 h-6 text-purple-600" />;
    case 'French':
      return <GiWineBottle className="w-6 h-6 text-purple-600" />;
    default:
      return <GiOpenedFoodCan className="w-6 h-6 text-purple-600" />;
  }
};

const FoodType = ({ foodType }: Props) => (
  <div className="flex justify-center">
    <div className="pr-2">
      <FoodIcon foodType={foodType} />
    </div>
    {foodType}
  </div>
);

export default FoodType;
