import { styled } from "styled-components";
import { Link } from "react-router-dom";
import variaveis from "../../styles/variaveis";

export const Cabecalho = styled.div`
  background-color: ${variaveis.roxoEscuro};
  color: ${variaveis.cinza};
  height: 160px;
  padding: 40px;

  div {
    display: flex;  
  }
`;

export const NovoContato = styled(Link)`
  color: ${variaveis.cinza};
`

export const Titulo = styled.h1`
  font-size: 20px;
  margin-right: 160px;
`;

export const ContainerInput = styled.div`
  background-color: ${variaveis.roxoClaro};
  height: 40px;
  margin-top: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
