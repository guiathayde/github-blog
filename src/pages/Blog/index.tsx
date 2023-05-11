import { Profile } from './components/Profile';

import { BlogContainer } from './styles';

export function Blog() {
  return (
    <BlogContainer>
      <Profile
        avatar="https://github.com/guiathayde.png"
        name="Guilherme Athayde"
        bio="It`s not a bug, it`s a feature!"
        username="guiathayde"
      />
    </BlogContainer>
  );
}
