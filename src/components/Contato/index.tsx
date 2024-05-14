import foto from "../../assets/perfil.jpg";
import variaveis from "../../styles/variaveis";
import * as S from "./styles";
import { excluir } from "../../store/reducers/contato";
import { ImBin, ImPencil } from "react-icons/im";
import { IoCheckmark } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useState } from "react";

type Props = {
  nome: string;
  telefone: string;
  email: string;
};

const Contato = ({ nome, telefone, email }: Props) => {
  const dispatch = useDispatch();
  const [editando, setEditando] = useState(false);

  return (
    <S.Contact>
      <S.Img src={foto} />
      <S.Dados>
        <textarea disabled={!editando}>{nome}</textarea>
        <textarea disabled={!editando}>{telefone}</textarea>
        <textarea disabled={!editando}>{email}</textarea>
      </S.Dados>
      <S.Icones>
        {editando ? (
          <IoCheckmark
            onClick={() => setEditando(false)}
            fontSize="24"
            color={variaveis.cinza}
            cursor="pointer"
          />
        ) : (
          <ImPencil
            onClick={() => setEditando(true)}
            color={variaveis.cinza}
            cursor="pointer"
          />
        )}

        <ImBin
          onClick={() => dispatch(excluir(telefone))}
          color={variaveis.cinza}
          cursor="pointer"
        />
      </S.Icones>
    </S.Contact>
  );
};

export default Contato;
