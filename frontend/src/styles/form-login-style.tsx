import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;

  label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }

  input {
    all: unset;
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
`;
