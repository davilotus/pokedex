import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Load from '../../../public/img/load.gif';
import { Favorite } from '../Favotite/Favorite';

import * as S from './styles.js';

export function PokemonCard({ pokemon }) {
  const [thisPokemon, setThisPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState(Load);

  const getPokemon = async (url) => {
    setPokemonImage(Load);
    const response = await fetch(url);
    const data = await response.json();

    setThisPokemon(data);
    setPokemonImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
    );
  };

  useEffect(() => {
    getPokemon(pokemon.url);
  }, [pokemon]);

  return (
    <S.PokemomCard
      className={thisPokemon?.types ? thisPokemon?.types[0]?.type?.name : ''}
    >
      <Link to={`/pokemon/${thisPokemon.name}`}>
        <span className={`bubble`}></span>
        <img src={pokemonImage} alt={thisPokemon.name} />
        {pokemon.name.toUpperCase()}
        <S.Id>#{thisPokemon.id}</S.Id>
      </Link>
      <Favorite pokemon={pokemon} />
    </S.PokemomCard>
  );
}
