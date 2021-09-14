import React from 'react';

export interface ModalProps {
  active: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  refModal: React.MutableRefObject<HTMLDivElement | null>;
  children?: any;
}

export interface DimmerProps {
  active: boolean;
}

export interface ModalButtonProps {
  background: string;
  textColor: string;
}
