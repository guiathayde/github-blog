import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { LinkContainer, Label } from './styles';

interface LinkProps {
  label: string;
  url: string;
}

export function Link({ label, url }: LinkProps) {
  return (
    <LinkContainer href={url} target="_blank">
      <Label>{label}</Label>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
  );
}
