import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from '../../../../components/Link';

import {
  PostInfoContainer,
  InfoHeader,
  BackButton,
  Title,
  InfoContainer,
  Info,
} from './styles';

import { Post } from '../../../../interfaces/Post';

interface PostInfoProps {
  post: Post;
}

export function PostInfo({ post }: PostInfoProps) {
  const formattedDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <PostInfoContainer>
      <InfoHeader>
        <BackButton to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </BackButton>
        <Link label="VER NO GITHUB" url={post.html_url} />
      </InfoHeader>

      <Title>{post.title}</Title>

      <InfoContainer>
        <Info>
          <FontAwesomeIcon icon={faGithub} />
          <span>{post.user.login}</span>
        </Info>
        <Info>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{formattedDate}</span>
        </Info>
        {post.comments > 0 && (
          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {post.comments} {post.comments > 1 ? 'comentários' : 'comentário'}
            </span>
          </Info>
        )}
      </InfoContainer>
    </PostInfoContainer>
  );
}
