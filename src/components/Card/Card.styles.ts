import styled from 'styled-components';

export const CardLayout = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  margin-right: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0px 3px 10px rgb(0 0 0 /0.2);
  transition: all 0.3s ease;
  word-wrap: break-word;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardBody = styled.div`
  font-size: 20px;
  max-width: 190px;
  word-wrap: break-word;
  color: rgba(0 0 0 / 0.5);
`;
