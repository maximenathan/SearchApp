import React, { useState, useCallback, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import debounce from 'lodash.debounce';
import cx from 'classnames';

import { connectSearchBox } from 'react-instantsearch-dom';
import { MdClear } from 'react-icons/md';
import Button from 'components/Button';

type Props = {
  currentRefinement: string;
  isSearchStalled: boolean;
  refine: (query: string) => void;
};

const SearchBox = ({ currentRefinement, isSearchStalled, refine }: Props) => {
  const { formatMessage } = useIntl();
  const [input, setInput] = useState(currentRefinement);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceOnSearch = useCallback(debounce(refine, 300), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleClear = () => {
    setInput('');
  };

  useEffect(() => {
    debounceOnSearch(input);
  }, [debounceOnSearch, input]);

  return (
    <form noValidate action="" role="search" className="flex items-center">
      <input
        className="w-full rounded-2xl h-14"
        type="search"
        value={input}
        onChange={handleChange}
        placeholder={formatMessage({ id: 'search.placeholder' })}
      />
      <Button
        onClick={handleClear}
        className={cx({
          invisible: input.length === 0,
          visible: input.length > 0
        })}
        icon={<MdClear className="w-6 h-6" />}
      />
      {isSearchStalled && <FormattedMessage id="search" />}
    </form>
  );
};

export default connectSearchBox(SearchBox);
