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
    margin-top: 20px;    
  }
`;

export const Img = styled.img`
  width: 60px;  
  border-radius: 30%;
`;

export const Dados = styled.div`
  width: 253px;
  padding-right: 80px;
  padding-left: 12px;

  textarea {
    font-size: 16px;
    color: ${variaveis.cinzaEscuro};    
    resize: none;
    border: none;
    height: 20px;
    background-color: transparent;

    &:first-child {
      font-size: 18px;
      color: ${variaveis.cinza};
      height: 22px;
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
