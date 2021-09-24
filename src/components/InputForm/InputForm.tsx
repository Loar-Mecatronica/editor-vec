import { InputFormProps } from './InputForm.interfaces';
import {
  InputFormContainer,
  InputFormInput,
  InputLabel,
} from './InputForm.styles';

export const InputForm = (props: InputFormProps) => {
  const { type = 'text', register, name, label = '', disabled = false } = props;
  return (
    <InputFormContainer type={type}>
      <InputLabel disabled={disabled} htmlFor={name}>
        {label}
      </InputLabel>
      <InputFormInput
        disabled={disabled}
        min={0}
        id={name}
        type={type}
        {...register}
      />
    </InputFormContainer>
  );
};
