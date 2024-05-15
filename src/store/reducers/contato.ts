import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";
import { v4 as uuid } from "uuid";

type contatoState = {
  contatos: Contato[];
};

const initialState: contatoState = {
  contatos: [
    {
      nome: "Breno Pereira",
      telefone: "(32) 94376-8661",
      email: "fulano@gmail.com",
      id: uuid(),
    },
    {
      nome: "Arthur Seta",
      telefone: "(32) 98672-7361",
      email: "ciclano@gmail.com",
      id: uuid(),
    },
    {
      nome: "Pedro Oliveira",
      telefone: "(32) 99846-8642",
      email: "beltrano@gmail.com",
      id: uuid(),
    },
    {
      nome: "Lucas Laurindo",
      telefone: "(32) 98836-9652",
      email: "fulano@gmail.com",
      id: uuid(),
    },
    {
      nome: "Carol Alves",
      telefone: "(32) 99743-8751",
      email: "ciclano@gmail.com",
      id: uuid(),
    },    
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<string>) => {
      state.contatos = [
        ...state.contatos.filter(
          (contato) => contato.telefone !== action.payload
        ),
      ];
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contaJaExiste = state.contatos.find(
        (contato) => contato.telefone === action.payload.telefone
      );

      if (contaJaExiste) {
        alert("Já existe um nome com esse número");
      } else {
        state.contatos.push(action.payload);
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.contatos.findIndex(contato => contato.id === action.payload.id)

      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload
      }
    }
  },
});

export const { excluir, adicionar } = contatosSlice.actions;

export default contatosSlice.reducer;
