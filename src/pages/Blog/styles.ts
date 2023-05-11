import styled from 'styled-components';

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const HeaderPublications = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.subtitle};
  }

  span {
    font-size: 14px;
    line-height: 1.6;
    text-align: right;
    color: ${({ theme }) => theme.span};
  }
`;
