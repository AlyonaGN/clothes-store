import { InputHTMLAttributes } from 'react';
import { FormInputLabel, Input, Group } from './form-input.styles';

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

export const FormInput = ({ label, ...otherProps }: InputProps) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={Boolean(otherProps?.value && typeof otherProps.value == 'string' && otherProps.value.length)}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
