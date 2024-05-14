import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  color: ${variaveis.cinza}; 
  
  @media(width >= 1024px) {
    width: 480px;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width: 50px;  
  border-radius: 30%;
`;

export const Dados = styled.div`
  width: 253px;
  padding-right: 80px;
  padding-left: 12px;

  textarea {
    font-size: 12px;
    color: ${variaveis.cinzaEscuro};    
    resize: none;
    border: none;
    height: 14px;
    background-color: transparent;

    &:first-child {
      font-size: 16px;
      color: ${variaveis.cinza};
      height: 20px;
    }
  }

  @media(width >= 1024px) {
   width: 360px; 
  }
`;

export const Icones = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
