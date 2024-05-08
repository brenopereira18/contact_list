import Header from "./containers/Header";
import ListaDeContatos from "./containers/ListaDeContatos";
import EstiloGlobal from "./styles";
import { Container } from "./styles";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header />
        <ListaDeContatos />
      </Container>
    </Provider>
  );
}

export default App;
