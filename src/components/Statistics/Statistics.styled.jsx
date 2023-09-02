import styled from 'styled-components';
// import { getRandomHexColor } from '../../helpers/RandomColor';

export const Stats = styled.section`
  width: 360px;
  margin: 0 auto;
  background-color: grey;

  h2 {
    text-align: center;
  }

  ul {
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      flex-basis: calc(100% / 5);
      padding: 10px;
      font-size: 18px;

      span:last-child {
        font-weight: 700;
      }
    }
  }
`;
