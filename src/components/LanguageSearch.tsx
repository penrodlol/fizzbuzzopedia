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
    {({ isSubmitting, isValid }) => (
      <Form className="flex flex-col sm:flex-row gap-3">
        <Field name="q">
          {({ field }: FieldProps) => (
            <Input
              {...field}
              placeholder="Search Language"
              aria-label="Search Language"
              required
            />
          )}
        </Field>
        <Button type="submit">Search</Button>
        {isSubmitting && isValid && (
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        )}
      </Form>
    )}
  </Formik>
);
