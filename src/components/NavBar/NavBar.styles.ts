import styled from 'styled-components';
import { NavBarLayoutProps } from './NavBar.interfaces';

export const NavBarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftTitle = styled.h1`
  margin: 0;
  color: #09779c;
  padding: 0;
  font-family: 'Roboto';
  cursor: pointer;
`;

export const RightControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ItemControl = styled.p`
  margin: 0;
  margin-right: 10px;
  padding: 5px;
  font-family: 'Roboto';
  color: ${(props: NavBarLayoutProps) =>
    !props.selected ? '#09779c' : 'white'};
  cursor: pointer;
  background-color: ${(props: NavBarLayoutProps) =>
    !props.selected ? 'white' : '#09779c'};
  padding: 5px;
  transition: all 0.3s ease;
  border-radius: 3px;
  &:hover {
    background-color: #09779c;
    color: white;
  }
`;
