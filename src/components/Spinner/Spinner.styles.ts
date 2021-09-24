import styled, { keyframes } from 'styled-components';
import { SpinnerStylesProps } from './Spiner.interfaces';

export const rotateSpinner = keyframes`
    0%{
        transform:rotate(0deg);
    }

    50%{
        border-top: 4px solid #09779c;
    }

    100%{
        transform:rotate(360deg);
    }
`;

export const SpinnerDimmer = styled.div`
  position: fixed;
  display: ${(props: SpinnerStylesProps) => (props.active ? 'flex' : 'none')};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  transition: none;
`;

export const SpinnerContainer = styled.div`
  border: 4px solid rgba(0, 0, 0, 0);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-bottom: 4px solid #09779c;
  animation: ${rotateSpinner} 1s ease infinite;
  transition: none;
  border-top: 4px solid #09779c;
`;
