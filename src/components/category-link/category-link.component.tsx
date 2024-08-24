import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

type CategoryLinkProps = {
  text: string
}

export const CategoryLink: FC<CategoryLinkProps> = ({ text }) => {
  const location = useLocation();
  return <Link to={`${location.pathname}/${text}`}>{text}</Link>;
};
