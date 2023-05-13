import { User } from './User';

export interface Post {
  html_url: string;
  id: number;
  number: number;
  title: string;
  comments: number;
  created_at: string;
  body: string;
  user: User;
}
