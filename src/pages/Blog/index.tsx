import { Profile } from './components/Profile';

import { Input } from '../../components/Input';

import { BlogContainer, HeaderPublications } from './styles';

export function Blog() {
  return (
    <BlogContainer>
      <Profile
        avatar="https://github.com/guiathayde.png"
        name="Guilherme Athayde"
        bio="It`s not a bug, it`s a feature!"
        username="guiathayde"
      />

      <HeaderPublications>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </HeaderPublications>
      <Input
        name="search"
        placeholder="Buscar conteúdo"
        containerStyle={{ marginBottom: 48 }}
      />
    </BlogContainer>
  );
}
