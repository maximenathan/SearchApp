import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import Restaurant from 'types/restaurant';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import useItemsSelection from 'hooks/useItemsSelection';
import { AlgoliaContext } from './Algolia';

type Props = {
  children: ReactNode;
};

type HydratedProps = {
  hits: Array<Restaurant> | undefined;
  refineNext: () => void;
  hasMore: boolean;
} & Props;

type ContextType = {
  clearSelection: () => void;
  deleteSelectedRestaurants: () => void;
  hasMore: boolean;
  isRestaurantSelected: (selection: Restaurant['objectID']) => boolean;
  nextPage: () => void;
  restaurants: Array<Restaurant>;
  selectedRestaurants: Array<Restaurant['objectID']>;
  toggleSelectedRestaurant: (selection: Restaurant['objectID']) => void;
  updateRestaurants: (restaurants: Array<Restaurant>) => void;
};

const defaultContext: ContextType = {
  clearSelection: () => undefined,
  deleteSelectedRestaurants: () => undefined,
  hasMore: false,
  isRestaurantSelected: () => false,
  nextPage: () => undefined,
  restaurants: [],
  selectedRestaurants: [],
  toggleSelectedRestaurant: () => undefined,
  updateRestaurants: () => undefined
};

export const RestaurantsContext = React.createContext<ContextType>(
  defaultContext
);

const Provider = ({ children, hits, refineNext, hasMore }: HydratedProps) => {
  const { deleteRestaurants } = useContext(AlgoliaContext);
  const {
    values: selectedRestaurants,
    toggle: toggleSelectedRestaurant,
    reset
  } = useItemsSelection<string>([]);
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>(hits || []);

  useEffect(() => {
    setRestaurants(hits || []);
  }, [hits]);

  const isRestaurantSelected = useCallback(
    (restaurantId: string) => {
      return selectedRestaurants.includes(restaurantId);
    },
    [selectedRestaurants]
  );

  const handleClearSelection = useCallback(() => {
    reset([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteSelection = useCallback(() => {
    deleteRestaurants(selectedRestaurants).then(response => {
      if (response === 'success') {
        setRestaurants(prevRestaurants =>
          prevRestaurants.filter(
            ({ objectID }) => !isRestaurantSelected(objectID)
          )
        );
        handleClearSelection();
      }
    });
  }, [
    deleteRestaurants,
    handleClearSelection,
    isRestaurantSelected,
    selectedRestaurants
  ]);

  return (
    <RestaurantsContext.Provider
      value={{
        selectedRestaurants,
        toggleSelectedRestaurant,
        isRestaurantSelected,
        clearSelection: handleClearSelection,
        deleteSelectedRestaurants: handleDeleteSelection,
        restaurants,
        updateRestaurants: setRestaurants,
        hasMore,
        nextPage: refineNext
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

const HydratedProvider = connectInfiniteHits(Provider);

export default HydratedProvider;
