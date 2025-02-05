import styled from "styled-components";

export const BackPage = styled.div`
    width: 100%;
    height: 60px;
    background-color: #0F2A51;

    a {
        color: #333;
        font-size: 1.5rem;
        text-decoration: none;
        transition: color 0.3s;
        background-color: #0F2A51;
    }

    a:hover {
        color: #ff5722;
    }

    i {
        font-size: 2rem;
        color: #b9f1d6;
        margin-right: 1rem;
        background-color: #0F2A51;
        margin: 10px 20px;

        @media(max-width: 500px) {
            margin: 15px 20px;
            font-size: 1.5rem;
        }
    }
`