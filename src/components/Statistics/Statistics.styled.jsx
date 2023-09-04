import styled from 'styled-components';

export const Stats = styled.section`
  padding: 20px;
  width: 450px;
  margin: 0 auto;
  background-color: #eff3f5;

  h2 {
    padding: 30px;
    text-transform: uppercase;
    text-align: center;
    color: #585c60;
    background-color: #fff;
  }

  ul {
    display: flex;
    gap: 5px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-basis: calc(100% / 5);
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: ${p => p.bgc};

  span:last-child {
    font-weight: 700;
  }
`;
