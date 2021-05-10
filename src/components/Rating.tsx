import ReactRating from 'react-rating';
import { IoFastFoodOutline, IoFastFoodSharp } from 'react-icons/io5';
import React from 'react';

type Props = {
  initialRating?: number;
  onChange?: (newRating: number) => void;
};

export const Rating = ({ initialRating, onChange }: Props) => (
  <ReactRating
    emptySymbol={
      <div className="w-6 h-6 2xl:bg-blend-color">
        <IoFastFoodOutline className="w-6 h-6 text-red-600" />
      </div>
    }
    fullSymbol={<IoFastFoodSharp className="w-6 h-6 text-red-600" />}
    initialRating={initialRating}
    onChange={onChange}
    readonly={!onChange}
  />
);

export default Rating;
