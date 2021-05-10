import React from 'react';
import { useIntl } from 'react-intl';
import { connectRange } from 'react-instantsearch-dom';
import Rating from 'components/Rating';

type Refinement = {
  min?: number;
  max?: number;
};

type Props = {
  refine: (newRating: Refinement) => void;
  currentRefinement: Refinement;
};

const StarRange = ({ refine, currentRefinement }: Props) => {
  const { formatMessage } = useIntl();
  const handleChange = (newRating: number) => {
    refine({ min: newRating });
  };
  return (
    <div className="px-4 py-1">
      <p className="text-blue-300 font-semibold">
        {formatMessage({ id: 'users.review' })}
      </p>
      <Rating initialRating={currentRefinement.min} onChange={handleChange} />
    </div>
  );
};

export default connectRange(StarRange);
