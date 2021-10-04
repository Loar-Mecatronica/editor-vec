import styled from 'styled-components';

export const AddEstationFormLayout = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
`;

export const AddFormHorizontalDivider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const AddFormVerticalDivider = styled.div`
  height: 10px;
`;

export const AddCompButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  background-color: #09779c;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 10px;
  margin-left: 10px;
  &:hover {
    color: #09779c;
    background-color: white;
  }
`;
export const SaveCompButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  background-color: #00b74a;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 10px;
  margin-left: 10px;
  &:hover {
    color: #00b74a;
    background-color: white;
  }
`;
