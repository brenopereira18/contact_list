import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Contato from "../../components/Contato";
import { Main } from "./styles";

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos);
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  const filtraTermo = () => {
    let contatosFiltrados = contatos;

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter((contato) =>
        contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      );

      return contatosFiltrados
    } else {
      return contatos
    }
  };

  const filtraContatos = filtraTermo()

  return (
    <Main>
      <ul>
        {filtraContatos.map((contato) => (
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
