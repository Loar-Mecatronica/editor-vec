import styled from 'styled-components';

interface LineButtonProps {
  picked: boolean;
}

export const StationsLayout = styled.div``;

export const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterContainer = styled.div`
  margin-top: 0px;
  margin-bottom: 50px;
  display: flex;
`;

export const LinesContainer = styled.div``;

export const TypesContainer = styled.div`
  margin-right: 200px;
`;

export const LineButton = styled.button`
  margin-right: 10px;
  background-color: ${(props: LineButtonProps) =>
    props.picked ? 'white' : '#09779c'};
  color: ${(props: LineButtonProps) => (props.picked ? '#09779c' : 'white')};
  font-family: 'Roboto';
  font-weight: bold;
  outline: none;
  border: 2px solid #09779c;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #09779c;
    background-color: white;
  }
`;
