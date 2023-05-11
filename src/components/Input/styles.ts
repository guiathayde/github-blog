import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.input};
  border-radius: 10px;
  padding: 1rem;
  width: 100%;

  border: 2px solid #232129;
  color: ${({ theme }) => theme.text};

  ${(props) =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.text};
      border-color: ${({ theme }) => theme.blue};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.text};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.text};
    box-shadow: none;

    &::placeholder {
      color: ${({ theme }) => theme.label};
    }
  }
`;
