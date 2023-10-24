import styled from 'styled-components';

export const SearcWrap = styled.div`
  margin: 0 0 40px;
  position: relative;

  form {
    display: flex;
    gap: 10px;
  }
`;

export const Input = styled.input.attrs({
  type: 'search',
})`
  padding: 10px;
  font-size: 1rem;
  padding: 10px;
  font-size: 1rem;
  width: 100%;
`;

export const SubmitInput = styled(Input).attrs({
  type: 'submit',
})`
  padding: 10px;
  max-width: 100px;
`;

export const ResultsWrap = styled.div`
  position: absolute;
  background: #3a3a3a;
  width: 100%;
  z-index: 4;
  overflow-y: scroll;
  max-height: 300px;
  margin-top: 10px;
  border-radius: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #888;
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }

  a {
    display: block;
    text-align: left;
    padding: 5px 10px;
    opacity: 0.6;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
      opacity: 1;
    }
  }
`;
