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
  width: calc(100% - 100px);
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
  width: calc(100% - 110px);
  z-index: 4;
  overflow-y: scroll;
  max-height: 300px;
  margin-top: 10px;

  a {
    display: block;
    text-align: left;
    padding: 5px 10px;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

// export const Input = styled.input.attrs({
//   type: 'submit',
// })`
//   padding: 10px 20px;
//   font-size: 1rem;
// `;
