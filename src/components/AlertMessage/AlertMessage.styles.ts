import styled from 'styled-components';
import {
  AlertMessageBoxProps,
  AlertMessageContainerProps,
} from './AlertMessage.interfaces';

export const AlertMessageContainer = styled.div`
  position: absolute;
  height: 200px;
  width: 100vw;
  display: ${(props: AlertMessageContainerProps) =>
    props.active ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
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
