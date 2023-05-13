import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { api } from '../../services/api';

import { PostInfo } from './components/PostInfo';

import { PostContainer, ContentContainer } from './styles';

import { Post as PostProps } from '../../interfaces/Post';

export function Post() {
  const { issueNumber } = useParams();

  const [post, setPost] = useState<PostProps>();

  useEffect(() => {
    api
      .get(`/repos/guiathayde/github-blog/issues/${issueNumber}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, [issueNumber]);

  return (
    <PostContainer>
      {post && (
        <>
          <PostInfo post={post} />

          <ContentContainer>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </ContentContainer>
        </>
      )}
    </PostContainer>
  );
}
