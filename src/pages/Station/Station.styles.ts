import styled from 'styled-components';

export const StationLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
`;

export const StationTitle = styled.h2`
  font-family: 'Roboto';
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

export const StationSubTitle = styled.h3`
  font-family: 'Roboto';
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

export const StationLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StationRight = styled.div``;

export const SaveButton = styled.button`
  display: flex;
  background-color: #00b74a;
  width: 100%;
  height: 35px;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  border: 1px #00b74a solid;
  transition: all 0.3s ease;
  &:hover {
    background-color: white;
    color: #00b74a;
  }
`;
