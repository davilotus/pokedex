import styled from 'styled-components';

export const Id = styled.span`
  position: absolute;
  z-index: 2;
  width: initial;
  height: initial;
  top: 5px;
  background: transparent;
  left: 10px;
`;

export const PokemomCard = styled.div.attrs((props) => ({
  $type: props.$type || 'transparent',
}))`
  position: relative;
  transition: all ease 0.2s;
  overflow: hidden;
  outline: 2px solid transparent;
  border-radius: 4px;
  flex: 5 200px;

  a {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 15px;
    background: #3a3a3a;
    color: #f3f3f3;
    font-size: 0.875rem;
  }

  img {
    object-fit: cover;
    aspect-ratio: 1/1;
    width: 100%;
    z-index: 2;
  }

  .bubble {
    transition: all ease 0.2s;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    background: #fff;
    top: -50px;
    left: -50px;
    z-index: 1;
    /* opacity: 0.1; */
    opacity: 0.3;
  }

  &.normal {
    .bubble {
      background: var(--normal);
    }
  }
  &.fighting {
    .bubble {
      background: var(--fighting);
    }
  }
  &.flying {
    .bubble {
      background: var(--flying);
    }
  }
  &.poison {
    .bubble {
      background: var(--poison);
    }
  }
  &.ground {
    .bubble {
      background: var(--ground);
    }
  }
  &.rock {
    .bubble {
      background: var(--rock);
    }
  }
  &.bug {
    .bubble {
      background: var(--bug);
    }
  }
  &.ghost {
    .bubble {
      background: var(--ghost);
    }
  }
  &.steel {
    .bubble {
      background: var(--steel);
    }
  }
  &.fire {
    .bubble {
      background: var(--fire);
    }
  }
  &.water {
    .bubble {
      background: var(--water);
    }
  }
  &.grass {
    .bubble {
      background: var(--grass);
    }
  }
  &.electric {
    .bubble {
      background: var(--electric);
    }
  }
  &.psychic {
    .bubble {
      background: var(--psychic);
    }
  }
  &.ice {
    .bubble {
      background: var(--ice);
    }
  }
  &.dragon {
    .bubble {
      background: var(--dragon);
    }
  }
  &.dark {
    .bubble {
      background: var(--dark);
    }
  }
  &.fairy {
    .bubble {
      background: var(--fairy);
    }
  }
  &.unknown {
    .bubble {
      background: var(--unknown);
    }
  }
  &.shadow {
    .bubble {
      background: var(--shadow);
    }
  }

  button {
    z-index: 3;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &:hover {
    outline: 2px solid var(--pink-500);
    transform: scale(1.01);

    a {
      color: #f3f3f3;
    }

    .bubble {
      transform: scale(8);
      opacity: 0.3;
    }

    &.normal {
      outline: 2px solid var(--normal);
    }
    &.fighting {
      outline: 2px solid var(--fighting);
    }
    &.flying {
      outline: 2px solid var(--flying);
    }
    &.poison {
      outline: 2px solid var(--poison);
    }
    &.ground {
      outline: 2px solid var(--ground);
    }
    &.rock {
      outline: 2px solid var(--rock);
    }
    &.bug {
      outline: 2px solid var(--bug);
    }
    &.ghost {
      outline: 2px solid var(--ghost);
    }
    &.steel {
      outline: 2px solid var(--steel);
    }
    &.fire {
      outline: 2px solid var(--fire);
    }
    &.water {
      outline: 2px solid var(--water);
    }
    &.grass {
      outline: 2px solid var(--grass);
    }
    &.electric {
      outline: 2px solid var(--electric);
    }
    &.psychic {
      outline: 2px solid var(--psychic);
    }
    &.ice {
      outline: 2px solid var(--ice);
    }
    &.dragon {
      outline: 2px solid var(--dragon);
    }
    &.dark {
      outline: 2px solid var(--dark);
    }
    &.fairy {
      outline: 2px solid var(--fairy);
    }
    &.unknown {
      outline: 2px solid var(--unknown);
    }
    &.shadow {
      outline: 2px solid var(--shadow);
    }
  }
`;
