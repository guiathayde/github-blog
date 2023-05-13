import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { Link } from '../../../../components/Link';

import {
  ProfileContainer,
  Avatar,
  ProfileDetailsContainer,
  Name,
  Bio,
  InfoContainer,
  Info,
  LinkContainer,
} from './styles';

import { User } from '../../../../interfaces/User';

interface ProfileProps {
  user: User;
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} alt={user.name} />

      <ProfileDetailsContainer>
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </Info>
          {user.company && (
            <Info>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </Info>
          )}
          {user.followers > 0 && (
            <Info>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>
                {user.followers}{' '}
                {user.followers > 1 ? 'seguidores' : 'seguidor'}
              </span>
            </Info>
          )}
        </InfoContainer>
      </ProfileDetailsContainer>

      <LinkContainer>
        <Link label="GITHUB" url="https://github.com/guiathayde" />
      </LinkContainer>
    </ProfileContainer>
  );
}
