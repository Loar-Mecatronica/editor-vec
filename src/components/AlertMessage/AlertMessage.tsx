import { AlertMessageProps } from './AlertMessage.interfaces';
import { AlertMessageBox, AlertMessageContainer } from './AlertMessage.styles';

export const AlertMessage = (props: AlertMessageProps) => {
  const { message, type } = props;
  return (
    <AlertMessageContainer>
      <AlertMessageBox type={type}>{message}</AlertMessageBox>
    </AlertMessageContainer>
  );
};
