import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';

import { LayoutContainer, WrapperContent } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <WrapperContent>
        <Outlet />
      </WrapperContent>
    </LayoutContainer>
  );
}
