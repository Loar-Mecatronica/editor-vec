import React, { RefObject } from 'react';

export interface AddEstationFormProps {
  refForm?: RefObject<HTMLFormElement>;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
  successCallBack?: () => void;
  errorCallBack?: () => void;
  defaultValues?: any;
  editMode?: boolean;
  loading?: boolean;
}

export interface AddEstationFormData {
  nombre: string;
  titulo: string;
  linea: number;
  componente: number;
  ipScanner: string;
  tipo: string;
  bypass: boolean;
  idEstacionSub: number;
  componenteStartIndex: number;
  componentLength: number;
  defectos: string[];
}
