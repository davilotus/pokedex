import { Link } from 'react-router-dom';

import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import PokemomLogo from '../../../public/img/pokemon.png';

import { Container } from '../../global-styles';
import * as S from './styles';

export function Header({ back = false }) {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrap>
          <Link to="/">
            <img src={PokemomLogo} alt="Pokémon Logo" />
          </Link>

          <S.Navigation>
            {back ? (
              <Link to={-1}>
                <ArrowLeftIcon />
                Back
              </Link>
            ) : null}
            <Link to="/favorites">
              Favorites <HeartIcon width={18} />
            </Link>
          </S.Navigation>
        </S.HeaderWrap>
      </Container>
    </S.Header>
  );
}
