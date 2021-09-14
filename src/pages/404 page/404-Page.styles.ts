import styled from 'styled-components';

export const Page404Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.h1`
  font-family: 'Roboto';
  color: rgba(0, 0, 0, 0.3);
`;

export const BackMenuButton = styled.button`
  width: 100%;
  border: none;
  color: white;
  background-color: #09779c;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 15px 0px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: white;
    color: #09779c;
    border: solid 1px #09779c;
  }
`;
