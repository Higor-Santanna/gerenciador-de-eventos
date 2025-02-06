import styled from "styled-components";

export const FormContainerAddUpdate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  form {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
  }

  h1 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    color: #333;
    margin: 1.5rem 0;
    background-color: white;
  }

  label {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    background-color: white;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.2rem 0 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #333;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #2ea44f;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
    background-color: white;
  }

  input[type="submit"] {
    background-color: #2ea44f;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #22863a;
    }
  }

  button{
    width: 100%;
    padding: 0.5rem;
    margin: 0.2rem 0 1rem;
    background-color: #2ea44f;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #22863a;
    }
  }

  @media (max-width: 600px) {
    h1 {
        font-size: 1.5rem;
    }

    form {
      max-width: 380px;
      padding: 1rem;
    }

    input, textarea {
      font-size: 0.8rem;
    }

    input[type="submit"] {
      font-size: 0.8rem;
    }

    button{
        font-size: 0.8rem;
    }
  }

  @media (max-width: 380px){
    form {
      max-width: 318px;
      padding: 1rem;
    }
  }
`;