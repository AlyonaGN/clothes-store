import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './category-link.styles';

type CategoryLinkProps = {
  text: string
}

export const CategoryLink: FC<CategoryLinkProps> = ({ text }) => {
  const location = useLocation();
  return <StyledLink to={`${location.pathname}/${text}`}>{text.toUpperCase()}</StyledLink>;
};
