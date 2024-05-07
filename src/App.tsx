import Header from "./containers/Header";
import ListaDeContatos from "./containers/ListaDeContatos";
import EstiloGlobal from "./styles";
import { Container } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <ListaDeContatos />
      </Container>
    </>
  );
}

export default App;
