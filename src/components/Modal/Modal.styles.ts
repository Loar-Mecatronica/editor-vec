import styled from 'styled-components';
import { DimmerProps, ModalButtonProps } from './Modal.interfaces';

export const Dimmer = styled.div`
  display: none;
  width: 100vw;
  opacity: ${(props: DimmerProps) => (props.active ? '1' : '0')};
  height: 100vh;
  position: fixed;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  justify-content: center;
  transition: all 0.2s ease;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: grid;
  background-color: white;
  width: 600px;
  grid-template-rows: 5vh auto 5vh;
  border-radius: 3px;
  transform: ${(props: DimmerProps) =>
    props.active ? 'translateY(0px)' : 'translateY(-30vh)'};
  transition: all 0.2s ease;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: calc(5vh - 20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
export const ModalBody = styled.div`
  margin: 10px;
  max-height: 80vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #09779c;
  }
`;

export const ModalFooter = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
`;

export const ModalButton = styled.button`
  margin-top: 5px;
  height: calc(5vh - 10px);
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  border: 1px solid ${(props: ModalButtonProps) => props.background};
  background-color: ${(props: ModalButtonProps) => props.background};
  color: ${(props: ModalButtonProps) => props.textColor};
  font-weight: bold;
  border-radius: 3px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props: ModalButtonProps) => props.textColor};
    color: ${(props: ModalButtonProps) => props.background};
  }
`;
