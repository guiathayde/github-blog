export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  name: string;
  company?: string;
  bio: string;
  followers: number;
}
