import { styled } from 'styled-components';

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.blue};

  text-decoration: none;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};
`;
