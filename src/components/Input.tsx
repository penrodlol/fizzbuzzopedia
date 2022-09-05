import { forwardRef, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    ref={ref}
    className="bg-transparent caret-brand-1 text-fluid-2 rounded-md shadow-lg w-full
               border-2 border-accent-2 py-2 px-4 outline-none hover:shadow-xl"
    {...props}
  />
));

Input.displayName = 'Input';
