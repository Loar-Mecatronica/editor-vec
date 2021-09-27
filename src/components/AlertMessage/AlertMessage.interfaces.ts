export interface AlertMessageBoxProps {
  type: 'success' | 'warning' | 'error' | 'info';
}

export interface AlertMessageProps {
  active: boolean;
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

export interface AlertMessageContainerProps {
  active: boolean;
}
