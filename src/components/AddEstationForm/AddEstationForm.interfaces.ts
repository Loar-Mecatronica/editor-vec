import { RefObject } from 'react';

export interface AddEstationFormProps {
  refForm: RefObject<HTMLFormElement>;
}

export interface AddEstationFormData {
  nombre: string;
  titulo: string;
  linea: number;
  componente: number;
  ipScanner: string;
  tipo: string;
  bypass: boolean;
  idProbadoraGen: number;
  idProbadoraCal: number;
  idEstacionSub: number;
  componenteStartIndex: number;
  componentLength: number;
}
