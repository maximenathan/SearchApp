import React from 'react';
import { connectStats } from 'react-instantsearch-dom';
import { FormattedMessage } from 'react-intl';

type Props = {
  nbHits: number;
};

const Stats = ({ nbHits }: Props) => (
  <p className="text-gray-700 text-opacity-50 pl-2">
    <FormattedMessage
      id="result.count"
      values={{
        count: nbHits
      }}
    />
  </p>
);

export default connectStats(Stats);
