import styled from 'styled-components';
import { SpecialSelectOptionsProps } from './SpecialSelect.interfaces';

export const SpecialSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpecialSelectInput = styled.input`
  width: 145px;
  border-radius: 3px;
  border: 1px solid rgba(9, 119, 156, 0.8);
  outline: none;
  &:focus {
    border: 1px solid #09779c;
    box-shadow: 0.5px 0px 3px 1px rgba(9, 119, 156, 0.5);
  }
`;

export const SpecialSelectBadge = styled.div`
  background-color: #09779c;
  color: white;
  font-family: 'Roboto';
  font-size: 10px;
  border-radius: 10px;
  padding: 5px;
  overflow-x: hidden;
  flex-wrap: nowrap;
  max-width: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  margin: 3px;
`;

export const SpecialSelectBadgeContainer = styled.div`
  display: flex;
  max-width: 150px;
  flex-wrap: wrap;
`;

export const SpecialSelectOptions = styled.div`
  min-width: 150px;
  display: ${(props: SpecialSelectOptionsProps) =>
    props.active ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  z-index: 2;
  overflow-y: auto;
  max-height: 200px;
  margin-top: 40px;
  background-color: white;
  //border: 1px solid rgba(0, 0, 0, 0.7);
  box-shadow: 2px 0px 5px 3px rgba (0, 0, 0, 0.8);
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

export const SpecialSelectOption = styled.div`
  cursor: pointer;
  border: 0.3px solid rgba(0, 0, 0, 0.6);
  :hover {
    background-color: #09779c;
    color: white;
  }
  transition: all 0.1s ease;
`;

export const SpecialSelectLabel = styled.label`
  font-family: 'Roboto';
  font-weight: bold;
  color: #09779c;
`;
