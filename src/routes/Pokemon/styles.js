import styled from 'styled-components';

export const PokemonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding: 60px 0 0;
  z-index: 1;
  position: relative;
`;

export const Image = styled.div`
  border-radius: 6px;
  background: #3a3a3a;
  position: relative;

  button {
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;

export const Ul = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
`;
