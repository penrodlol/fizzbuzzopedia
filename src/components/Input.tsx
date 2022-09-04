import { forwardRef, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    ref={ref}
    className="bg-1 caret-brand rounded-md shadow-lg w-full
               py-2 px-4 outline-none hover:shadow-xl"
    {...props}
  />
));

Input.displayName = 'Input';
