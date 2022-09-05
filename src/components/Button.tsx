import { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const VARIANTS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-accent-2 text-black hover:bg-accent-1',
  secondary: 'outline outline-accent-2 outline-2 hover:text-1',
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className={`
      cursor-pointer rounded-md shadow-lg text-fluid-2 font-bold px-8 py-2
      ${VARIANTS[props.variant ?? 'primary']}`}
  >
    {children}
  </button>
);
