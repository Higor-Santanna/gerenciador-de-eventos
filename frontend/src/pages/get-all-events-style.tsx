import styled from "styled-components";

export const EventListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  li {
    position: relative;
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
  
  li:nth-child(odd) {
    background: #ececec;

    h2{
        background-color: #ececec;
    }

    p{
        background-color: #ececec;
    }

    strong{
        background-color: #ececec;
    }
  }

  li h2 {
    font-size: 1.3rem;
    color: #ff5722;
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: 700;
    background-color: white;
    border-radius: 5px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
    font-weight: 500;
    background-color: #fff;
  }

  strong{
    background-color: #fff;
  }

  @media (max-width: 600px) {
    li {
      padding: 1rem;
    }
  }
`;

export const ButtonTrash = styled.button`
    position: absolute;
    top: -8px;
    right: 10px;
    background: #e74c3c;
    color: white;
    font-size: 0.9rem;
    width: 40px;
    height: 25px;
    text-align: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    i{
        background-color: #e74c3c;
    }

    &:hover {
      background: #c0392b;
    }

    @media (max-width: 500px){
        width: 30px;
        height: 25px;
        font-size: 0.7rem;
    }
`

export const ButtonEdit = styled.button`
    background: #2ea44f;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    width: 100px;
    height: 30px;
    text-align: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: #22863a;
    }

    @media (max-width: 500px){
        width: 80px;
        height: 25px;
        font-size: 0.75rem;
    }
`
export const AnyEvents = styled.h3`
    font-size: 2rem;
    color: #555;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 800;
`