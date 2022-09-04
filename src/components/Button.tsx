import { ButtonHTMLAttributes, FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-brand text-black rounded-md shadow-lg text-xl font-bold
               px-8 py-[0.8rem]"
  >
    {children}
  </button>
);
