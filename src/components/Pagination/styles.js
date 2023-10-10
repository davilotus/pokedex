import styled from 'styled-components';

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;

    svg {
      height: 15px;
    }
  }
`;
