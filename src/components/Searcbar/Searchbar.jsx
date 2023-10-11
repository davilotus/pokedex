import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles.js';

export function Searchbar() {
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100000`
    );
    const data = await response.json();
    const results = await data.results;

    setPokemons(results);
  };

  const onSearch = (term) => {
    setInputSearch(term);

    const resultSearch = pokemons.filter((pokemon) => {
      return pokemon?.name.includes(term.toLowerCase());
    });

    setSearch(resultSearch);
  };

  useEffect(() => {
    getPokemons();
  }, [inputSearch]);

  return (
    <S.SearcWrap>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <S.Input
          type="search"
          value={inputSearch}
          placeholder="Find your Pokémon"
          name="search"
          required
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
      </form>

      {search && inputSearch && (
        <S.ResultsWrap>
          {search.map((pokemon, key) => {
            return (
              <div key={key}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </div>
            );
          })}
        </S.ResultsWrap>
      )}
    </S.SearcWrap>
  );
}
