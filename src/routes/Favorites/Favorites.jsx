import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FavoritesContext } from '../../providers/FavoritesContext';

import { Author } from '../../components/Author/Author';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { Header } from './../../components/Header/Header';

import { Container, H1 } from '../../global-styles';

export function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
      <Header back={true} />

      <Container>
        <H1>Favorites</H1>

        {favorites.length ? (
          <div className="pokemon-list">
            {favorites?.map((pokemon, key) => {
              return <PokemonCard key={key} pokemon={pokemon} />;
            })}
          </div>
        ) : (
          <>
            <p>You do not have any favorite Pokemón</p>
            <Link to="/">Back to Pokemóns</Link>
          </>
        )}
      </Container>

      <Author />
    </>
  );
}
