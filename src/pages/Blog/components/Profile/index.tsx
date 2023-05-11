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

interface ProfileProps {
  avatar: any;
  name: string;
  bio: string;
  username: string;
}

export function Profile({ avatar, name, bio, username }: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt={name} />

      <ProfileDetailsContainer>
        <Name>{name}</Name>
        <Bio>{bio}</Bio>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{username}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{username}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>13 seguidores</span>
          </Info>
        </InfoContainer>
      </ProfileDetailsContainer>

      <LinkContainer>
        <Link label="GITHUB" url="https://github.com/guiathayde" />
      </LinkContainer>
    </ProfileContainer>
  );
}
