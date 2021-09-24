import styled from 'styled-components';
import { AlertMessageBoxProps } from './AlertMessage.interfaces';

export const AlertMessageContainer = styled.div`
  position: 1fixed;
  height: 200px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlertMessageBox = styled.div`
  width: 200px;
  padding: 20px;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  background-color: ${(props: AlertMessageBoxProps) => {
    switch (props.type) {
      case 'success':
        return '#28A745';
      case 'warning':
        return '#f0ad4e';
      case 'error':
        return '#d9534f';
      default:
        return '#0275d8';
    }
  }};
`;
