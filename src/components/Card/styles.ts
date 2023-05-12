import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 416px;
  max-height: 260px;

  padding: 2rem;

  background: ${({ theme }) => theme.post};
  border-radius: 10px;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.title};
`;

export const DateTime = styled.span`
  min-width: 64px;

  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.span};
`;

export const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;
