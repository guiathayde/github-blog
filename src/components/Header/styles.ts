import { styled } from 'styled-components';

import coverImg from '../../assets/cover.png';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${coverImg});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 4rem 0 8.375rem;
`;

export const Logo = styled.img`
  width: 9.25rem;
  height: 6.125rem;
  object-fit: cover;
  cursor: pointer;
`;
