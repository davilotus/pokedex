export const API = async (endpoint = '') => {
  try {
    let API = `https://pokeapi.co/api/v2/pokemon/`;

    const response = await fetch(`${API}${endpoint}`);
    const data = await response.data;
    return await data.json();
  } catch (error) {
    console.log('Error', error);
  }
};
