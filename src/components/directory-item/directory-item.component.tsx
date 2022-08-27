import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryDirectory } from '../../store/categories/categoriesSlice';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

type DirectoryItemProps = {
  category: CategoryDirectory
}

export const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNanigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNanigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
