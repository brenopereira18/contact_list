import { useDispatch } from "react-redux";
import * as S from "./styles";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { adicionar } from "../../store/reducers/contato";
import { v4 as uuid } from "uuid";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  
  const adicionarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(adicionar({
      nome,
      telefone,
      email,
      id: uuid(),            
    }))

    navigate('/')
  }

  return (
    <S.FormContainer>
      <form onSubmit={adicionarContato}>
        <S.FormGroup>
          <label htmlFor="nome">Nome</label>
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required={true}
            name="nome"
            id="nome"
            type="text"
          />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="telefone">Telefone</label>
          <IMaskInput
            value={telefone}
            onAccept={(valor) => setTelefone(valor)}
            mask="(00) 00000-0000"
            placeholder="(00) 00000-0000"
            id="telefone"
            required={true}
          />
        </S.FormGroup>
        <S.FormGroup>
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required={true}
            name="email"
            id="email"
            type="email"
          />
        </S.FormGroup>
        <S.Botao type="submit">Adicionar</S.Botao>
      </form>
    </S.FormContainer>
  );
};

export default Formulario;
