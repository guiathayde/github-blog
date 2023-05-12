import { CardContainer, CardHeader, Title, DateTime, Content } from './styles';

interface CardProps {
  title: string;
  date: string;
  content: string;
}

export function Card({ title, date, content }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <Title>{title}</Title>
        <DateTime>{date}</DateTime>
      </CardHeader>
      <Content>{content}</Content>
    </CardContainer>
  );
}
