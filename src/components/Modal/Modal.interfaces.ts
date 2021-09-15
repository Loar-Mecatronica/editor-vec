import React, { RefObject } from 'react';

export interface ModalProps {
  active: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  refModal: React.MutableRefObject<HTMLDivElement | null>;
  children?: any;
  title?: string;
  refForm: RefObject<HTMLFormElement>;
}

export interface DimmerProps {
  active: boolean;
}

export interface ModalButtonProps {
  background: string;
  textColor: string;
}
