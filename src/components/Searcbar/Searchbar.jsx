import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles.js';

export function Searchbar() {
  const [inputSearch, setInputSearch] = useState('');
  const [search, setSearch] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  let inputFocus = false;

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
      return pokemon?.name.includes(inputSearch.toLowerCase());
    });

    setSearch(resultSearch);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <S.SearcWrap>
      <form onSubmit={(e) => e.preventDefault()}>
        <S.Input
          type="search"
          value={inputSearch}
          placeholder="Find your Pokémon"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
        <S.SubmitInput type="submit" value="Search" />
      </form>

      {search && (
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
