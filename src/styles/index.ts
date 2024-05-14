import { createGlobalStyle, styled } from "styled-components";


const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;             
    } 

    
`;

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  @media(width >= 1024px) {
    max-width: 100vw;   
  }
`;

export default EstiloGlobal;
