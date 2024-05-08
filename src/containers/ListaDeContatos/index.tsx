import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Contato from "../../components/Contato";
import { Main } from "./styles";

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos);

  return (
    <Main>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.telefone}>
            <Contato
              nome={contato.nome}
              telefone={contato.telefone}
              email={contato.email}
            />
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default ListaDeContatos;
