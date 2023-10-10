import { useContext } from 'react';
import { FavoritesContext } from '../../providers/FavoritesContext.jsx';

import { HeartIcon } from '@heroicons/react/24/outline';

import * as S from './styles.js';

export function Favorite({ pokemon }) {
  const { toggleFavorite, isFavorited } = useContext(FavoritesContext);

  return (
    <S.FavButton className="fav" onClick={() => toggleFavorite(pokemon)}>
      <HeartIcon className={isFavorited(pokemon) ? 'filled' : ''} />
    </S.FavButton>
  );
}
