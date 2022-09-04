import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export interface LanguageSearchProps {
  onSearch: (query: string) => void;
  onReset: () => void;
}

export const LanguageSearch: FC<LanguageSearchProps> = ({
  onSearch,
  onReset,
}) => (
  <Formik<{ q: string }>
    initialValues={{ q: '' }}
    onSubmit={({ q }) => onSearch(q)}
    onReset={onReset}
  >
    {({ isSubmitting }) => (
      <Form className="flex gap-3">
        <Field name="q" required>
          {({ field }: FieldProps) => (
            <Input
              {...field}
              placeholder="Search Language"
              aria-label="Search Language"
            />
          )}
        </Field>
        <Button type="submit">Search</Button>
        {isSubmitting && <Button type="reset">Reset</Button>}
      </Form>
    )}
  </Formik>
);
