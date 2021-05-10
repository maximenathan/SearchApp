import without from 'lodash.without';
import React from 'react';

type ReturnObject<T> = {
  values: Array<T>;
  toggle: (selection: T) => void;
  add: (selection: T) => void;
  remove: (selection: T) => void;
  reset: (newSelections?: Array<T>) => void;
};

type ItemType = string | number;

const useItemsSelection = <TItem extends ItemType>(
  initialSelections: Array<TItem> | undefined = []
): ReturnObject<TItem> => {
  const [selectedItems, setItemsSelection] = React.useState<Array<TItem>>(
    initialSelections
  );

  const handleItemsSelectionToggle = React.useCallback(
    (selection: TItem) => {
      const newSelections = selectedItems.includes(selection)
        ? without(selectedItems, selection)
        : [...selectedItems, selection];
      setItemsSelection(newSelections);
    },
    // Fixed here https://github.com/facebook/react/pull/19751
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedItems]
  );

  const handleAddItem = React.useCallback(
    (selection: TItem) => {
      if (!selectedItems.includes(selection)) {
        setItemsSelection([...selectedItems, selection]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedItems]
  );

  const handleRemoveItem = React.useCallback(
    (selection: TItem) => {
      if (selectedItems.includes(selection)) {
        setItemsSelection(without(selectedItems, selection));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedItems]
  );

  const handleReset = React.useCallback(
    (selection?: Array<TItem>) => {
      setItemsSelection(selection || []);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    values: selectedItems as Array<TItem>,
    toggle: handleItemsSelectionToggle,
    add: handleAddItem,
    remove: handleRemoveItem,
    reset: handleReset
  };
};

export default useItemsSelection;
