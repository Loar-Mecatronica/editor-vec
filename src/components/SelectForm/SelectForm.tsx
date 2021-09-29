import {
  ErrorLabel,
  SelectFormContainer,
  SelectFormLabel,
  SelectFormOption,
} from './SelectForm.styles';
import { SelectFormProps } from './SelectForm.interfaces';
export const SelectForm = (props: SelectFormProps) => {
  const { register, options, label, name, disabled = false, error } = props;
  return (
    <>
      <SelectFormLabel disabled={disabled}>
        {label ? label : name}
      </SelectFormLabel>
      <SelectFormContainer disabled={disabled} {...register} id={name}>
        {options.map((option, index) => {
          return (
            <SelectFormOption
              onClickCapture={option.handler ? option.handler : () => {}}
              key={`selectOption${index}`}
              value={option.value}
            >
              {option.label}
            </SelectFormOption>
          );
        })}
      </SelectFormContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};
