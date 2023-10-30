import { useEffect, useState } from 'react';

import { Author } from './components/Author/Author';
import { Header } from './components/Header/Header';
import { Pagination } from './components/Pagination/Pagination';
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { Searchbar } from './components/Searcbar/Searchbar';

import { Container, H1 } from './global-styles';

export function App() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

  const getPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const results = await data.results;

    setPokemons(results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };

  useEffect(() => {
    getPokemons(url);
  }, [url]);

  return (
    <>
      <Header back={false} />

      <Container>
        <H1>Pokedéx</H1>
        <Searchbar />

        {pokemons ? (
          <>
            <div className="pokemon-list">
              {pokemons.map((pokemon, key) => {
                return <PokemonCard key={key} pokemon={pokemon} />;
              })}
            </div>

            <Pagination prevUrl={prevUrl} nextUrl={nextUrl} setUrl={setUrl} />
          </>
        ) : (
          <div>Nenhum pokemóm encontrado</div>
        )}
      </Container>

      <Author />
    </>
  );
}
