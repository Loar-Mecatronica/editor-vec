import { Dispatch, SetStateAction } from 'react';

export interface AlertMessageBoxProps {
  type: 'success' | 'warning' | 'error' | 'info';
}

export interface AlertMessageProps {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

export interface AlertMessageContainerProps {
  active: boolean;
}
