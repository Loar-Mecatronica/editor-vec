import styled from 'styled-components';
import { InputFormLabelProps, InputStyleProps } from './InputForm.interfaces';

export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: ${(props: InputStyleProps) =>
    props.type === 'checkbox' ? 'row' : 'column'};
  align-items: ${(props: InputStyleProps) =>
    props.type === 'checkbox' ? 'center' : 'flex-start'}; ;
`;

export const InputFormInput = styled.input`
  border-radius: 3px;
  outline: none;
  border: 1px solid rgba(9, 119, 156, 0.8);
  font-family: 'Roboto';
  max-width: 200px;
  ${(props: InputStyleProps) =>
    props.type === 'checkbox'
      ? ''
      : `&:focus {
    border: 1px solid #09779c;
    box-shadow: 0.5px 0px 3px 1px rgba(9, 119, 156, 0.5);
  }`};
`;

export const InputLabel = styled.label`
  color: ${(props: InputFormLabelProps) =>
    props.disabled ? 'rgba(0,0,0,0.5)' : '#09779c'};
  font-family: 'Roboto';
  font-weight: bold;
`;
