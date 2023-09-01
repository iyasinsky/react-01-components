import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 280px;
  border: 1px solid #81909f;
  border-radius: 5px;
  overflow: hidden;
`;

export const Description = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-block: 20px;
  color: #81909f;
  font-size: 18px;

  img {
    max-width: 120px;
    border-radius: 50%;
    background-color: grey;

    + p {
      color: #132236;
      font-weight: 700;
      font-size: 24px;
    }
  }
`;

export const Stats = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    flex-basis: calc(100% / 3);
    padding: 10px;
    font-size: 18px;
    background-color: #eeeeee;
    border-top: 1px solid grey;

    &:not(:last-child) {
      border-right: 1px solid grey;
    }

    span:first-child {
      color: #81909f;
    }

    span:last-child {
      font-weight: 700;
    }
  }
`;
