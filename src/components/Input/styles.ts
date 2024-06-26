import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";

export const CampoPesquisa = styled.input`
    margin-left: 10px; 
    color: ${variaveis.cinza};   
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;

    &::placeholder {
        color: ${variaveis.cinza}; 
    }

    @media(width >= 1024px) {
        width: 460px;        
    }
`
