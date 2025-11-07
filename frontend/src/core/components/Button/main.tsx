import React from 'react';
import { getButtonClassName } from './variants';
import type { ButtonProps } from './types';

/**
 * @component Button
 * @summary A versatile button component with multiple variants and sizes.
 * @domain core
 * @type ui-component
 * @category form
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    const buttonClassName = getButtonClassName({ variant, size, fullWidth });

    return (
      <button className={`${buttonClassName} ${className || ''}`} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
