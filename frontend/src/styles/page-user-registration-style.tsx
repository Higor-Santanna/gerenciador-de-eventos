import styled from "styled-components";

export const RegisterTitle = styled.h1`
    font-size: 1.8rem;
    color: #333;
    margin: 1rem 0;
    text-align: center;
    margin-top: 4rem;
`

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: 90%;
        max-width: 400px;
    }

  label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
    background: white;
  }

  input {
    border: 1px solid #ccc;
    padding: 0.8rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #ff5722;
  }

  input[type="submit"] {
    background: #ff5722;
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: background 0.3s;
  }

  input[type="submit"]:hover {
    background: #e64a19;
  }

  .password-container {
    background-color: #FFFFFF;
    position: relative; /* Necessário para posicionar os ícones dentro do campo */
  }

  .password-container input {
      padding-right: 2.5rem; /* Espaço para os ícones */
  }

  .password-container i {
      background-color: #FFFFFF;
      position: absolute;
      right: 0.8rem; /* Posiciona o ícone à direita dentro do campo */
      top: 39%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #888; /* Cor dos ícones */
      font-size: 1.2rem;
  }
`;
