import styled from 'styled-components';
import { HomeListProps } from './Home.interfaces';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeLayout = styled.div`
  width: 90%;
  margin-top: 20px;
  height: calc(100vh - 20px);
  overflow: hidden;
`;

export const HomeTitle = styled.h1`
  margin: 0;
  color: #09779c;
  padding: 0;
  font-family: 'Roboto';
  cursor: pointer;
`;

export const ItalicTitle = styled.i`
  font-family: 'Roboto';
  font-size: 25px;
`;

export const HomeList = styled.h1`
  max-width: 100%;
  max-height: calc(100% - 100px);
  padding-top: 30px;
  padding-left: 30px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  transition: all 0.3s ease;
  opacity: ${(props: HomeListProps) =>
    props.opacity !== undefined ? props.opacity : 1};
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
