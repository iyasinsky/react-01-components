import styled from 'styled-components';

export const Table = styled.table`
  width: 750px;
  margin: 0 auto;
  border-spacing: 0px;
  border: 1px solid #ebebeb;

  thead {
    th {
      padding: 10px;
      text-transform: uppercase;
      background-color: #00bcd5;
      color: #fff;

      &:not(:last-child) {
        border-right: 1px solid #ebebeb;
      }
    }
  }

  tbody {
    tr {
      text-transform: capitalize;
      text-align: center;
      color: #6f767c;

      &:nth-child(2n) {
        background-color: #ecf1f4;
      }

      td {
        padding: 10px;

        &:not(:last-child) {
          border-right: 1px solid #ebebeb;
        }
      }
    }
  }
`;
