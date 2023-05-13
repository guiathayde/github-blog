import { useState, useCallback, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Profile } from './components/Profile';

import { Input } from '../../components/Input';
import { Card } from '../../components/Card';

import { BlogContainer, HeaderPublications, CardList } from './styles';

import { User } from '../../interfaces/User';
import { Post } from '../../interfaces/Post';

export function Blog() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');

  const loadUser = useCallback(async () => {
    const response = await api.get('/users/guiathayde');

    setUser(response.data);
  }, []);

  const loadPosts = useCallback(async () => {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:guiathayde/github-blog is:issue',
      },
    });

    setPosts(response.data.items);
  }, []);

  useEffect(() => {
    loadUser();
    loadPosts();
  }, [loadUser, loadPosts]);

  const handleSearchPosts = useCallback((search: string) => {
    api
      .get('/search/issues', {
        params: {
          q: `${search} repo:guiathayde/github-blog is:issue`,
        },
      })
      .then((response) => setPosts(response.data.items))
      .catch((error) => console.error(error));
  }, []);

  const handleInputKeyDown = useCallback(
    (event: any) => {
      if (event.key === 'Enter') {
        handleSearchPosts(search);
      }
    },
    [handleSearchPosts, search]
  );

  return (
    <BlogContainer>
      {user && <Profile user={user} />}

      <HeaderPublications>
        <h2>Publicações</h2>
        <span>
          {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
        </span>
      </HeaderPublications>
      <Input
        name="search"
        placeholder="Buscar conteúdo"
        required
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleInputKeyDown}
        containerStyle={{ marginBottom: 48 }}
      />

      <CardList>
        {posts.map((post) => {
          const date = formatDistanceToNow(new Date(post.created_at), {
            locale: ptBR,
            addSuffix: true,
          });

          return (
            <Card
              key={post.id}
              title={post.title}
              date={date}
              content={post.body}
              onClick={() => navigate(`/post/${post.number}`)}
            />
          );
        })}
      </CardList>
    </BlogContainer>
  );
}
