import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0F2A51;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 100%;
    height: 50px;
    max-width: 600px;
    text-align: center;
    background-color: #0F2A51;

    i {
        font-size: 3rem;
        color: white;
        margin-right: 1rem;
        background-color: #0F2A51;
        
        @media(max-width: 500px) {
          font-size: 2.3rem;
        }
    }

    h1 {
        font-size: 2rem;
        color: #FCFCFC;
        background-color: #0F2A51;

        @media(max-width: 500px) {
          font-size: 1.35rem;
        }
    }

    
  }

  a {
    margin-top: 1rem;
    color: #9cc4e4;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
    background-color: #0F2A51;
    text-decoration: underline;
    font-size: 0.9rem;

    @media(max-width: 500px) {
      text-align: center;
    }
  }

  a:hover {
    color: #e64a19;
  }
`;
