import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { Author } from '../../components/Author/Author';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { FavoritesContext } from '../../providers/FavoritesContext';
import { Header } from './../../components/Header/Header';

export function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
      <Header back={true} />

      <div className="container">
        <h1>Favorites</h1>

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
      </div>

      <Author />
    </>
  );
}
