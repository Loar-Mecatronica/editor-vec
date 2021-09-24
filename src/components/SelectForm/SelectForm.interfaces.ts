import { UseFormRegisterReturn } from 'react-hook-form';

export interface SelectFormProps {
  register: UseFormRegisterReturn;
  options: { label: string; value: any; handler?: () => void }[];
  label?: string;
  name: string;
}
