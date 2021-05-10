import React from 'react';
import RatingMenu from 'features/algolia/StarRange';
import Refinement from 'features/algolia/Refinement';

const Filters = () => (
  <div>
    <RatingMenu attribute="rounded_stars_count" min={1} max={5} />
    <Refinement attribute="food_type" />
  </div>
);

export default Filters;
