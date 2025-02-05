import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0F2A51;
  width: 100%;
  height: 70px;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    background-color: #0F2A51;
  }

  i {
    font-size: 1.8rem;
    background-color: #0F2A51;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    background-color: #0F2A51;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.3s;
  }

  button i {
    font-size: 1.2rem;
  }

  button:hover {
    opacity: 0.8;
    color: red;
    
  }

  @media (max-width: 600px) {
    padding: 1rem;
    
    p {
      display: none;
    }

    button {
      font-size: 0.9rem;
    }
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin: 2rem 0;
  font-weight: bold;

  span {
    color: #ff5722;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const AddEventButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 4rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  a{
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #2ea44f;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.2s ease-in-out, box-shadow 0.2s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  }

  i {
    font-size: 1rem;
    background-color: #2ea44f;
    transition: background 0.2s ease-in-out, box-shadow 0.2s;
  }

  a:hover {
    background-color: #22863a;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

    i{
      background-color: #22863a;
    }
  }
`;