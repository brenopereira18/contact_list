import foto from "../../assets/perfil.jpg";
import variaveis from "../../styles/variaveis";
import * as S from "./styles";
import { excluir } from "../../store/reducers/contato";
import { ImBin, ImPencil } from "react-icons/im";
import { useDispatch } from "react-redux";

type Props = {
  nome: string;
  telefone: string;
  email: string;
};

const Contato = ({ nome, telefone, email }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Contact>
      <S.Img src={foto} />
      <S.Dados>
        <h4>{nome}</h4>
        <p>{telefone}</p>
        <p>{email}</p>
      </S.Dados>
      <S.Icones>
        <ImPencil color={variaveis.cinza} cursor="pointer" />
        <ImBin onClick={() => dispatch(excluir(telefone))} color={variaveis.cinza} cursor="pointer" />
      </S.Icones>
    </S.Contact>
  );
};

export default Contato;
