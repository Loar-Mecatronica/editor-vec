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

export const InputCheckbox = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin: 10px;
  transition: ease 0.3s;
  -webkit-transition: ease 0.3s;
  -moz-transition: ease 0.3s;
  -o-transition: ease 0.3s;
  &:after {
    content: '';
    width: 60px;
    height: 28px;
    display: inline-block;
    background: rgba(196, 195, 195, 0.55);
    border-radius: 18px;
    clear: both;
    transition: ease 0.3s;
    -webkit-transition: ease 0.3s;
    -moz-transition: ease 0.3s;
    -o-transition: ease 0.3s;
  }
  &:before {
    content: '';
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
    left: 0;
    top: -3px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    transition: ease 0.3s;
    -webkit-transition: ease 0.3s;
    -moz-transition: ease 0.3s;
    -o-transition: ease 0.3s;
  }
  &:checked:before {
    left: 32px;
    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.6);
    transition: ease 0.3s;
    -webkit-transition: ease 0.3s;
    -moz-transition: ease 0.3s;
    -o-transition: ease 0.3s;
  }
  &:checked:after {
    background: #16a085;
    transition: ease 0.3s;
    -webkit-transition: ease 0.3s;
    -moz-transition: ease 0.3s;
    -o-transition: ease 0.3s;
  }
`;

export const InputLabel = styled.label`
  color: ${(props: InputFormLabelProps) =>
    props.disabled ? 'rgba(0,0,0,0.5)' : '#09779c'};
  font-family: 'Roboto';
  font-weight: bold;
`;

export const ErrorLabel = styled.p`
  padding: 0px;
  margin: 0px;
  color: rgba(217, 83, 79, 1);
`;
