import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  color: ${variaveis.cinza};
`;

export const Img = styled.img`
  width: 48px;
  border-radius: 50%;
`;

export const Dados = styled.div`
  width: 253px;
  padding-right: 80px;
  padding-left: 12px;

  h4 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    color: ${variaveis.cinzaEscuro};
    padding-top: 4px;
  }
`;

export const Icones = styled.div`
  display: flex;
  gap: 16px;
`;
