import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;

  width: 100%;

  padding: 2rem 2.5rem;

  background: ${({ theme }) => theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProfileDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.title};
`;

export const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};

  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
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
