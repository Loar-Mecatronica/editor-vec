import styled from 'styled-components';
import {
  AlertMessageBoxProps,
  AlertMessageContainerProps,
} from './AlertMessage.interfaces';

export const AlertMessageContainer = styled.div`
  position: absolute;
  height: 180px;
  width: 100vw;
  display: flex;
  visibility: ${(props: AlertMessageContainerProps) =>
    props.active ? 'visible' : 'hidden'};
  justify-content: center;
  align-items: center;
  opacity: ${(props: AlertMessageContainerProps) => (props.active ? 1 : 0)};
  top: 0;
  left: 0;
  transform: ${(props: AlertMessageContainerProps) =>
    props.active ? 'translateY(0)' : 'translateY(-10vh)'};
  transition: visibility 600ms ease, opacity 600ms ease, transform 600ms ease;
`;

export const AlertMessageBox = styled.div`
  min-width: 200px;
  padding: 20px;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  border-radius: 3px;
  backdrop-filter: blur(2px);
  background-color: ${(props: AlertMessageBoxProps) => {
    switch (props.type) {
      case 'success':
        return 'rgba(40,167,69,0.6)';
      case 'warning':
        return 'rgba(240,173,78,0.6)';
      case 'error':
        return 'rgba(217,83,79,0.6)';
      default:
        return 'rgba(2,117,216,0.6)';
    }
  }};
`;
