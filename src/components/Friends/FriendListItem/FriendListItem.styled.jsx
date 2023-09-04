import styled from 'styled-components';

export const OnlineStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${p => (p['data-status'] ? 'green' : 'red')};
`;
