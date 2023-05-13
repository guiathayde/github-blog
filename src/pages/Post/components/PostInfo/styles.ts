import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;

  padding: 2rem;

  background: ${({ theme }) => theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  border: none;
  background: transparent;

  cursor: pointer;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.title};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: auto;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  span {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.subtitle};
  }
`;
