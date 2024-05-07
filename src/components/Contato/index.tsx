import foto from '../../assets/perfil.jpg'
import variaveis from '../../styles/variaveis';
import * as S from './styles'
import { ImBin, ImPencil } from "react-icons/im";

const Contato = () => {
    return (
        <S.Contact>
            <S.Img src={foto} />
            <S.Dados>
                <h4>Breno Pereira</h4>
                <p>(32)98423-7431</p> 
                <p>brenopereirabetti@gmail.com</p>   
            </S.Dados>
            <S.Icones>
                <ImPencil color={variaveis.cinza} cursor="pointer" />  
                <ImBin color={variaveis.cinza} cursor="pointer" />  
            </S.Icones>       
        </S.Contact>
    )    
}

export default Contato