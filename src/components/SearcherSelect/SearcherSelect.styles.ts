import styled from 'styled-components';

export const SearcherSelectLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearcherSelectInput = styled.input`
  border: 1px solid #09779c;
  border-radius: 3px;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    box-shadow: 0.5px 0px 3px 1px rgba(9, 119, 156, 0.5);
  }
`;

export const SearcherSelectLabel = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

export const SearcherSelectOptions = styled.div``;
export const SearcherSelectOption = styled.div``;
