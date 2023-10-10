import styled from 'styled-components';

export const FavButton = styled.button`
  padding: 3px !important;
  display: flex;
  border: 1px solid transparent;
  background-color: #1a1a1a;
  border-radius: 4px;
  cursor: pointer;

  svg {
    width: 24px;

    path {
      fill: transparent;
      stroke: red;
    }

    &.filled {
      path {
        fill: red;
      }
    }
  }
`;
