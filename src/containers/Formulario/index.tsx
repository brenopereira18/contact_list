import * as S from './styles'

const Formulario = () => {
    return (
    <S.FormContainer>
      <form>
        <S.FormGroup>
          <label htmlFor="nome">Nome</label>
          <input required={true} name="nome" id="nome" type="text" />
        </S.FormGroup>
        <S.FormGroup>
            <label htmlFor="telefone">Telefone</label>
            <input required={true} name="telefone" id="telefone" type="text" />
        </S.FormGroup>
        <S.FormGroup>
            <label htmlFor="email">E-mail</label>
            <input required={true} name="email" id="email" type="email" />
        </S.FormGroup>
        <S.Botao type="submit">Adicionar</S.Botao>
      </form>
    </S.FormContainer>
    )
}

export default Formulario