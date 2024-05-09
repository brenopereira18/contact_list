import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type contatoState = {
  contatos: Contato[];
};

const initialState: contatoState = {
  contatos: [
    {
      nome: "Breno Pereira",
      telefone: "(32) 94376-8661",
      email: "fulano@gmail.com",
    },
    {
      nome: "Arthur Seta",
      telefone: "(32) 98672-7361",
      email: "ciclano@gmail.com",
    },
    {
      nome: "Pedro Oliveira",
      telefone: "(32) 99846-8642",
      email: "fulano@gmail.com",
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
        alert('Já existe um nome com esse número')
      } else {        
        state.contatos.push(action.payload)
      }
    },
  },
});

export const { excluir } = contatosSlice.actions;

export default contatosSlice.reducer;
