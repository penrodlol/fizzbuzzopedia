import { FC, FormEvent, useCallback, useRef } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export interface LanguageSearchProps {
  onSearch: (query?: string) => void;
}

export const LanguageSearch: FC<LanguageSearchProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const search = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSearch(inputRef.current?.value);
    },
    [onSearch],
  );

  return (
    <form className="flex gap-2" onSubmit={search}>
      <Input
        ref={inputRef}
        placeholder="Search Language"
        aria-label="Search Language"
        required
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
