import Formulario from "../../containers/Formulario";
import { Button, Container } from "./styles";

const NovoContato = () => {
  return (
    <Container>
      <Button to="/">
        <span>Voltar</span>
      </Button>
      <Formulario />
    </Container>
  );
};

export default NovoContato;
