import { RefObject } from 'react';

export interface AddEstationFormProps {
  refForm: RefObject<HTMLFormElement>;
}

export interface AddEstationFormData {
  name: string;
}
