import React, { ReactNode, useCallback } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import Restaurant from 'types/restaurant';

type Props = {
  children: ReactNode;
};

type ContextType = {
  deleteRestaurants: (
    ids: Array<Restaurant['objectID']>
  ) => Promise<'success' | 'error'>;
};

const defaultContext: ContextType = {
  deleteRestaurants: async () => 'error'
};

export const AlgoliaContext = React.createContext<ContextType>(defaultContext);

const Provider = ({ children }: Props) => {
  const client = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APPLICATION_ID || '',
    process.env.REACT_APP_ALGOLIA_API_KEY || ''
  );
  const index = client.initIndex(
    process.env.REACT_APP_ALGOLIA_INDEX_NAME || ''
  );

  const handleDeleteRestaurants = useCallback(
    async (ids: Array<Restaurant['objectID']>) => {
      try {
        await index.deleteObjects(ids);
        return 'success';
      } catch {
        return 'error';
      }
    },
    [index]
  );

  return (
    <InstantSearch
      indexName={process.env.REACT_APP_ALGOLIA_INDEX_NAME || ''}
      searchClient={client}>
      <AlgoliaContext.Provider
        value={{ deleteRestaurants: handleDeleteRestaurants }}>
        {children}
      </AlgoliaContext.Provider>
    </InstantSearch>
  );
};

export default Provider;
