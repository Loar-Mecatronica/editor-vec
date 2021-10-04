import { InputFormProps } from './InputForm.interfaces';
import {
  ErrorLabel,
  InputCheckbox,
  InputFormContainer,
  InputFormInput,
  InputLabel,
} from './InputForm.styles';

export const InputForm = (props: InputFormProps) => {
  const {
    type = 'text',
    register,
    name,
    label = '',
    disabled = false,
    error,
    loading = false,
  } = props;
  return (
    <InputFormContainer type={type}>
      <InputLabel disabled={disabled} htmlFor={name}>
        {label}
      </InputLabel>
      {type !== 'checkbox' && (
        <InputFormInput
          pattern={type === 'number' ? '[0-9]*' : '*'}
          disabled={disabled}
          min={0}
          id={name}
          type={type}
          {...register}
        />
      )}
      {type === 'checkbox' && (
        <InputCheckbox
          pattern={type === 'number' ? '[0-9]*' : '*'}
          disabled={disabled}
          min={0}
          id={name}
          loading={loading}
          type={type}
          {...register}
        />
      )}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputFormContainer>
  );
};
