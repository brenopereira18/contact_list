import EstiloGlobal from "./styles";
import { Container } from "./styles";
import store from "./store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NovoContato from "./pages/NovoContato";

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novoContato',
    element: <NovoContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas}/>
      </Container>
    </Provider>
  );
}

export default App;
