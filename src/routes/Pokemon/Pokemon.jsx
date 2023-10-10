import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Favorite } from '../../components/Favotite/Favorite.jsx';
import { Header } from '../../components/Header/Header.jsx';

import Load from '../../../public/img/load.gif';

import { Author } from '../../components/Author/Author.jsx';
import * as S from './styles.js';

export function Pokemon() {
  const { slug } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [stats, setStats] = useState([]);
  const [pokemonImage, setPokemonImage] = useState(Load);

  const getPokemon = async () => {
    setPokemonImage(Load);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
    const data = await response.json();

    setPokemon(data);
    setPokemonImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
    );
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    setStats(pokemon.stats);
  }, [pokemon]);

  return (
    <>
      <Header back={true} />
      <div className="container">
        <S.PokemonWrap>
          <S.Image>
            <Favorite
              pokemon={{
                name: pokemon.name,
                url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
              }}
            />
            <img src={pokemonImage} alt={pokemon.name} />
          </S.Image>
          <div className="info">
            <h1>
              #{pokemon.id} {pokemon.name}
            </h1>

            {stats && (
              <S.Ul>
                <li>
                  <b>weight: </b>
                  {pokemon.weight}
                </li>

                {stats.map((status, key) => {
                  return (
                    <li key={key}>
                      <b>{status.stat.name}: </b>
                      {status.base_stat} <br />
                    </li>
                  );
                })}
              </S.Ul>
            )}
          </div>
        </S.PokemonWrap>
      </div>

      <Author />
    </>
  );
}
