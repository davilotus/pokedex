import { Link } from 'react-router-dom';

import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import PokemomLogo from '../../../public/img/pokemon.png';

import * as S from './styles';

export function Header({ back = false }) {
  return (
    <S.Header>
      <div className="container">
        <S.HeaderWrap>
          <Link to={-1}>
            <img src={PokemomLogo} alt="Pokémon Logo" />
          </Link>

          <S.Navigation>
            {back ? (
              <Link to="/">
                <ArrowLeftIcon />
                Back
              </Link>
            ) : null}
            <Link to="/favorites">
              Favorites <HeartIcon width={18} />
            </Link>
          </S.Navigation>
        </S.HeaderWrap>
      </div>
    </S.Header>
  );
}
