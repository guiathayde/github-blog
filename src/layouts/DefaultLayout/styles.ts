import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

export const WrapperContent = styled.div`
  flex: 1;
  overflow-y: auto;

  max-width: 864px;
  width: 80%;

  margin-top: -5.25rem;
  margin-left: auto;
  margin-right: auto;
`;
