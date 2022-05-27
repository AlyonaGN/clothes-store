import { Link, useLocation } from 'react-router-dom';

export const CategoryLink = ({ text }) => {
  const location = useLocation();
  return <Link to={`${location.pathname}/${text}`}>{text}</Link>;
};
