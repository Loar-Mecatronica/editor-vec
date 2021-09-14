import styled from 'styled-components';
import { FloatButtonLayoutProps } from './FloatButton.interfaces';

export const FloatButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 50%;
  color: ${(props: FloatButtonLayoutProps) => props.textColor};
  background-color: ${(props: FloatButtonLayoutProps) => props.backgroud};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${(props: FloatButtonLayoutProps) => props.backgroud};
    background-color: ${(props: FloatButtonLayoutProps) => props.textColor};
  }
`;
