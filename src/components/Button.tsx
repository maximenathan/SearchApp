import React, { ReactNode } from 'react';
import cx from 'classnames';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
  label?: string;
  color?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
};

const Button = ({
  onClick,
  icon,
  label,
  color = 'primary',
  className,
  disabled = false
}: Props) => (
  <button
    disabled={disabled}
    onClick={onClick}
    type="button"
    className={cx(
      `disabled:opacity-50 inline-flex items-center justify-center p-1 rounded-full focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-opacity-25 hover:bg-opacity-40 ${className}`,
      {
        [`hover:bg-purple-100 focus:ring-purple-600`]: color === 'primary',
        [`hover:bg-red-100 focus:ring-red-600`]: color === 'secondary'
      }
    )}>
    <span
      className={cx('flex', {
        'text-purple-600': color === 'primary',
        'text-red-600': color === 'secondary'
      })}>
      {icon && icon}
      {label && label.toUpperCase()}
    </span>
  </button>
);

export default Button;
