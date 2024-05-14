import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-top: 12%;
  background-color: ${variaveis.roxoClaro};
  height: 100vh;

  @media(width >= 1024px) {
   padding-top: 4%; 
  }
`;

export const Button = styled(Link)`
  margin-left: 40px;
  margin-bottom: 60px;
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #717171;
  display: flex;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100px;
  width: 100%;
  padding: 2px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:active, &:hover {
    outline: 0;
  }

  &:hover span {
    background: none; 
    color: #fff;
  }

  &:active {
    transform: scale(0.9);  
  }

  span {
    background-color: rgb(5, 6, 45);
    padding: 12px 16px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    text-align: center;
  }
`;
