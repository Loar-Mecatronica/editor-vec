import { RefObject } from 'react';

export interface AddComponentFormProps {
  refForm: RefObject<HTMLFormElement>;
}

export interface AddComponentFormData {
  name: string;
}
