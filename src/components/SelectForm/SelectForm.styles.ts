import styled from 'styled-components';

export const SelectFormContainer = styled.select`
  width: 150px;
  outline: none;
  background-color: white;
  border: 1px solid #09779c;
  border-radius: 3px;
  &:focus {
    box-shadow: 0.5px 0px 3px 1px rgba(9, 119, 156, 0.5);
  }
`;

export const SelectFormOption = styled.option`
  font-family: 'Roboto';
  outline: none;
`;

export const SelectFormLabel = styled.label`
  color: #09779c;
  font-family: 'Roboto';
  font-weight: bold;
`;
