import cx from 'classnames';
import { IoWine, IoWineOutline } from 'react-icons/io5';
import React from 'react';

type Props = {
  label: string;
  selected: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, selected, onChange }: Props) => {
  return (
    <label
      htmlFor={label}
      className={cx(
        'flex items-center p-0.5 m-0.5 flex cursor-pointer hover:bg-purple-100 border-2 border-blue-50 rounded-xl',
        {
          'border-purple-500 bg-purple-300': selected
        }
      )}>
      <input
        className="hidden"
        id={label}
        type="checkbox"
        checked={selected}
        onChange={onChange}
      />
      {selected ? (
        <IoWine className="text-purple-600 w-12" />
      ) : (
        <IoWineOutline className="text-purple-600 w-12" />
      )}

      <span className="px-2 text-xs whitespace-nowrap">
        {label.toUpperCase()}
      </span>
    </label>
  );
};

export default Checkbox;
