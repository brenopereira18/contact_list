import { useDispatch, useSelector } from "react-redux";
import { CampoPesquisa } from "./styles";
import { RootReducer } from "../../store";
import { filtraTermo } from "../../store/reducers/filtro";

const Input = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);
  return (
    <CampoPesquisa
      value={termo}
      onChange={(event) => dispatch(filtraTermo(event.target.value))}
      type="text"
      placeholder="Busque pelo nome"
    />
  );
};

export default Input;
