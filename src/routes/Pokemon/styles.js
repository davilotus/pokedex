import styled from 'styled-components';

export const PokemonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 60px 0 0;
  z-index: 1;
  position: relative;
`;

export const Image = styled.div`
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: #3a3a3a;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    opacity: 0.2;
  }

  &.normal {
    &::before {
      background: var(--normal);
    }
  }
  &.fighting {
    &::before {
      background: var(--fighting);
    }
  }
  &.flying {
    &::before {
      background: var(--flying);
    }
  }
  &.poison {
    &::before {
      background: var(--poison);
    }
  }
  &.ground {
    &::before {
      background: var(--ground);
    }
  }
  &.rock {
    &::before {
      background: var(--rock);
    }
  }
  &.bug {
    &::before {
      background: var(--bug);
    }
  }
  &.ghost {
    &::before {
      background: var(--ghost);
    }
  }
  &.steel {
    &::before {
      background: var(--steel);
    }
  }
  &.fire {
    &::before {
      background: var(--fire);
    }
  }
  &.water {
    &::before {
      background: var(--water);
    }
  }
  &.grass {
    &::before {
      background: var(--grass);
    }
  }
  &.electric {
    &::before {
      background: var(--electric);
    }
  }
  &.psychic {
    &::before {
      background: var(--psychic);
    }
  }
  &.ice {
    &::before {
      background: var(--ice);
    }
  }
  &.dragon {
    &::before {
      background: var(--dragon);
    }
  }
  &.dark {
    &::before {
      background: var(--dark);
    }
  }
  &.fairy {
    &::before {
      background: var(--fairy);
    }
  }
  &.unknown {
    &::before {
      background: var(--unknown);
    }
  }
  &.shadow {
    &::before {
      background: var(--shadow);
    }
  }

  button {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 1;
  }

  img {
    position: relative;
    z-index: 2;
  }
`;

export const Ul = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
`;
