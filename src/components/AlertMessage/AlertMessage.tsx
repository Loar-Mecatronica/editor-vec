import { AlertMessageProps } from './AlertMessage.interfaces';
import { AlertMessageBox, AlertMessageContainer } from './AlertMessage.styles';

export const AlertMessage = (props: AlertMessageProps) => {
  const { message, type, active } = props;
  return (
    <AlertMessageContainer active={active}>
      <AlertMessageBox type={type}>{message}</AlertMessageBox>
    </AlertMessageContainer>
  );
};
