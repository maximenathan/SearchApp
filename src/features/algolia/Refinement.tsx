import React, { useCallback } from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { FormattedMessage } from 'react-intl';
import Checkbox from 'components/Checkbox';

type Item = {
  count: number;
  isRefined: boolean;
  label: string;
  value: Array<string>;
};

type Props = {
  refine: (value: string[]) => undefined;
  items: Array<Item>;
};

const RefinementList = ({ items, refine }: Props) => {
  const handleSelectItem = useCallback(
    (selectedItem: Item) => () => {
      refine(selectedItem.value);
    },
    [refine]
  );

  return (
    <div className="px-4 py-1 hidden md:block md:y-1">
      <p className="text-blue-300 font-semibold">
        <FormattedMessage id="food.main.style" />
      </p>
      <form className="flex flex-row flex-wrap md:flex-col">
        {items.map(item => (
          <Checkbox
            key={item.label}
            onChange={handleSelectItem(item)}
            label={item.label}
            selected={item.isRefined}
          />
        ))}
        {items.length === 0 && <FormattedMessage id="no.filters" />}
      </form>
    </div>
  );
};

export default connectRefinementList(RefinementList);
