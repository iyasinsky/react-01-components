import styled from 'styled-components';

export const List = styled.ul`
  padding: 15px;
  width: 260px;
  margin: 0 auto;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 10px;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.31) 0px 0px 12px 3px;
    border-radius: 5px;
  }
`;
