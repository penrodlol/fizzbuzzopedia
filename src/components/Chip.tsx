import { PropsWithChildren } from 'react';

export const Chip = ({ children }: PropsWithChildren) => (
  <span
    className="bg-brand text-[black] font-extrabold rounded-full px-2 h-max
               max-w-max text-sm"
  >
    {children}
  </span>
);
