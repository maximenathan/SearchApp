import Stats from 'features/algolia/Stats';
import React, { useContext } from 'react';
import { RestaurantsContext } from 'context/Restaurants';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import { MdClear, MdDelete } from 'react-icons/md';

const SelectedRestaurantsMenu = () => {
  const {
    selectedRestaurants,
    clearSelection,
    deleteSelectedRestaurants
  } = useContext(RestaurantsContext);

  return (
    <>
      <p>
        <FormattedMessage
          id="restaurant.selection.count"
          values={{ count: selectedRestaurants.length }}
        />
      </p>
      <Button
        disabled={selectedRestaurants.length < 1}
        onClick={clearSelection}
        icon={<MdClear className="w-6 h-6" />}
      />
      <Button
        disabled={selectedRestaurants.length < 1}
        onClick={deleteSelectedRestaurants}
        icon={<MdDelete className="w-6 h-6" />}
      />
    </>
  );
};

const Toolbar = () => (
  <div className="flex items-center last:pl-2">
    <SelectedRestaurantsMenu />
    <Stats />
  </div>
);

export default Toolbar;
