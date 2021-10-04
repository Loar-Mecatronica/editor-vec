import styled from 'styled-components';
import { SearcherSelectOptionsProps } from './SearcherSelect.interfaces';

export const SearcherSelectLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearcherSelectInput = styled.input`
  width: 145px;
  border-radius: 3px;
  outline: none;
  transition: all 0.3s ease;
  border: 1px solid #09779c;
  background-color: #09779c;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  &:focus {
    background-color: white;
    color: black;
    box-shadow: 0.5px 0px 3px 1px rgba(9, 119, 156, 0.5);
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const SearcherSelectLabel = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

export const SearcherSelectOptions = styled.div`
  border: 1px solid #09779c;
  position: absolute;
  margin-top: 44px;
  min-width: 148px;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
  display: ${(props: SearcherSelectOptionsProps) =>
    props.visible ? 'flex' : 'none'};
  flex-direction: column;
`;
export const SearcherSelectOption = styled.div`
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #09779c;
    color: white;
  }
`;
