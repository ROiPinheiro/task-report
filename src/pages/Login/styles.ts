import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 32px;
    border-radius: 5px;

    h1 {
      display: block;
      text-align: center;
      margin-bottom: 32px;
      border-bottom: 1px solid #999;
      padding-bottom: 16px;
    }

    label {
      margin-bottom: 16px;

      input {
        display: block;
        width: 100%;
        border-radius: 5px;
        height: 32px;
        margin-top: 6px;
        border: 1px solid #444;
        padding-left: 6px;
      }
    }

    button {
      height: 32px;
      background: #114455;
      color: #fff;
      border-radius: 5px;
      border: none;
      margin-top: 16px;

      :hover {
        background: #003355;
        cursor: pointer;
      }
    }
  }
`;
