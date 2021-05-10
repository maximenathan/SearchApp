import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { RestaurantsContext } from 'context/Restaurants';
import RestaurantCard from 'components/RestaurantCard';
import { FormattedMessage } from 'react-intl';

const Results = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const {
    restaurants,
    isRestaurantSelected,
    toggleSelectedRestaurant,
    hasMore,
    nextPage
  } = useContext(RestaurantsContext);

  const onSentinelIntersection = useCallback(
    (entries: Array<IntersectionObserverEntry>) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && hasMore) {
          nextPage();
        }
      });
    },
    [hasMore, nextPage]
  );

  useEffect(() => {
    // https://discourse.algolia.com/t/infinite-hits-hasmore-always-false/9929/2
    if (!hasMore) {
      return;
    }
    const observer = new IntersectionObserver(onSentinelIntersection, {});

    if (sentinelRef.current !== null) {
      observer.observe(sentinelRef.current);
    }

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSentinelIntersection]);

  return (
    <div className="flex flex-wrap justify-center w-full">
      {restaurants.map(restaurant => (
        <RestaurantCard
          key={restaurant.objectID}
          restaurant={restaurant}
          onSelect={toggleSelectedRestaurant}
          selected={isRestaurantSelected(restaurant.objectID)}
        />
      ))}
      {restaurants.length === 0 && (
        <p className="text-center">
          <FormattedMessage id="no.result" />
        </p>
      )}
      <div ref={sentinelRef} className="h-16" />
    </div>
  );
};

export default Results;
