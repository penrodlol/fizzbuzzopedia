import { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const VARIANTS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-brand-2 text-black hover:bg-brand-1',
  secondary: 'outline outline-brand-2 outline-2 hover:text-1',
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className={`
      cursor-pointer rounded-md shadow-lg text-xl font-bold px-8 py-[0.8rem]
      ${VARIANTS[props.variant ?? 'primary']}`}
  >
    {children}
  </button>
);
