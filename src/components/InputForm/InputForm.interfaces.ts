import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export interface InputFormProps {
  type?: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  name: string;
  label?: string;
  disabled?: boolean;
  error?: string;
}

export interface InputStyleProps {
  type?: string;
}

export interface InputFormLabelProps {
  disabled: boolean;
}
