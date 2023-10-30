import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 5;
  left: 0;
  top: 0;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.3);

  img {
    width: 115px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  a {
    display: flex;
    gap: 5px;
    align-items: center;

    svg {
      height: 15px;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  a {
    color: #fff;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
