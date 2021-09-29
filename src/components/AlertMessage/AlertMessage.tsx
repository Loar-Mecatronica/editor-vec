import { useEffect } from 'react';
import { AlertMessageProps } from './AlertMessage.interfaces';
import { AlertMessageBox, AlertMessageContainer } from './AlertMessage.styles';

export const AlertMessage = (props: AlertMessageProps) => {
  const { message, type, state } = props;
  const [active, setActive] = state;
  useEffect(() => {
    let closeTimeout: any = null;
    closeTimeout = setTimeout(() => setActive(false), 3000);
    return () => {
      clearTimeout(closeTimeout);
    };
  }, [active, setActive]);
  return (
    <AlertMessageContainer active={active}>
      <AlertMessageBox type={type}>{message}</AlertMessageBox>
    </AlertMessageContainer>
  );
};
