import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";

export const Main = styled.main`
  height: 75vh;
  overflow-y: scroll;
  background-color: ${variaveis.roxoClaro};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${variaveis.cinzaEscuro};
    border-radius: 4px;
  }
`;
