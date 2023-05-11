import { useNavigate } from 'react-router-dom';

import { HeaderContainer, Logo } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo
        src={logoImg}
        alt="Logo GitHub Blog"
        onClick={() => navigate('/')}
      />
    </HeaderContainer>
  );
}
