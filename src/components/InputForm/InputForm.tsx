import { InputFormProps } from './InputForm.interfaces';
import {
  InputFormContainer,
  InputFormInput,
  InputLabel,
} from './InputForm.styles';

export const InputForm = (props: InputFormProps) => {
  const { type = 'text', register, name, label = '' } = props;
  return (
    <InputFormContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputFormInput id={name} type={type} {...register} />
    </InputFormContainer>
  );
};
