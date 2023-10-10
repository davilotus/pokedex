import { createContext, useEffect, useState } from 'react';

export const FavoritesContext = createContext({});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    localStorage.getItem('favPokemons')
      ? JSON.parse(localStorage.getItem('favPokemons'))
      : []
  );

  const addFavorite = (pokemon) => {
    setFavorites([...favorites, pokemon]);
  };

  const removeFavorite = (pokemon) => {
    const removeFavorite = favorites?.find((removePokemon) => {
      return removePokemon.name == pokemon.name;
    });

    if (!removeFavorite) return;

    const updatedFavorites = favorites.filter(
      (removePokemon) => removePokemon !== removeFavorite
    );
    setFavorites(updatedFavorites);
  };

  const toggleFavorite = (pokemon) => {
    isFavorited(pokemon) ? removeFavorite(pokemon) : addFavorite(pokemon);
  };

  const isFavorited = (pokemon) => {
    const favorited = favorites?.find(
      (favoritedPokemon) => favoritedPokemon.name == pokemon.name
    );
    return favorited;
  };

  useEffect(() => {
    const hasLocalFavorites = localStorage.getItem('favPokemons')
      ? JSON.parse(localStorage.getItem('favPokemons'))
      : [];

    setFavorites(hasLocalFavorites);
  }, []);

  localStorage.setItem('favPokemons', JSON.stringify(favorites));

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        isFavorited,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
