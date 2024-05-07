import { SlMagnifier } from "react-icons/sl";
import { IoAddOutline } from "react-icons/io5";
import Input from "../../components/Input";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Cabecalho>
      <div>
        <S.Titulo>Meus contatos</S.Titulo>
        <IoAddOutline size="26" />
      </div>
      <S.ContainerInput>
        <SlMagnifier size="18" />
        <Input />
      </S.ContainerInput>
    </S.Cabecalho>
  );
};

export default Header;
