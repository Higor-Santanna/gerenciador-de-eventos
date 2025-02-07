import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  flex-direction: column;
  text-align: center;
  background-color: #0F2A51;

  h3 {
    font-size: 1.5rem;
    color: #ffffff;
    margin: 1.5rem;
    background-color: #0F2A51;
  }

  a {
    display: inline-block;
    text-decoration: none;
    background-color: #2ea44f;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #22863a;
    }
  }
`;
