import styled from 'styled-components';

export const Author = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 30px 15px 15px;
  background: rgba(0, 0, 0, 0);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.54) 54%,
    rgba(0, 0, 0, 1) 100%
  );

  a {
    font-size: 16px;
    display: table;
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
    font-weight: 700;

    span {
      color: #f44336;
    }

    &:hover {
      color: #fff;
    }
  }
`;
