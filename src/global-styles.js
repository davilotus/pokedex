import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --pink-500: #9c27b0;
    --violet-700: #552d9e;

    --normal: #000;
    --fighting: #2F4F4F;
    --flying: #87CEFA;
    --poison: #9932CC;
    --ground: #CD853F;
    --rock: #909090;
    --bug: #2ECC71;
    --ghost: #F8F8FF;
    --steel: #C0C0C0;
    --fire: #B22222;
    --water: #2980B9;
    --grass: #27AE60;
    --electric: #F1C40F;
    --psychic: #95A5A6;
    --ice: #F0F8FF;
    --dragon: #EAB897;
    --dark: #000;
    --fairy: #DDA0DD;
    --unknown: #909090;
    --shadow: #696969;
  }

  a {
    transition: all .3s ease;
    font-weight: 500;
    color: #fff;
    text-decoration: inherit;
  }

  a:hover {
    color: var(--pink-500);
  }

  body {
    margin: 0;
    display: flex;
    padding: 60px 0 100px;
    min-width: 320px;
    min-height: calc(100vh - 160px);
  }

  #root {
    width: 100%;
  }

  .card {
    padding: 2em;
  }

  .pokemon-list {
    display: grid;
    gap: 20px;
    justify-content: flex-start;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 1199px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 575px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const H1 = styled.h1`
  font-size: 3.2rem;
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  text-align: center;
  padding: 0 15px;

  @media (max-width: 1400px) {
    max-width: 1140px;
  }

  @media (max-width: 1199px) {
    max-width: 960px;
  }

  @media (max-width: 991px) {
    max-width: 720px;
  }

  @media (max-width: 767px) {
    max-width: 540px;
  }
`;
