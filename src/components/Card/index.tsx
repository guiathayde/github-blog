import { HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';

import { CardContainer, CardHeader, Title, DateTime, Content } from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  content: string;
}

export function Card({ title, date, content, ...rest }: CardProps) {
  return (
    <CardContainer {...rest}>
      <CardHeader>
        <Title>{title}</Title>
        <DateTime>{date}</DateTime>
      </CardHeader>
      <Content>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Content>
    </CardContainer>
  );
}
