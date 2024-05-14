import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type filtroState = {
    termo?: string
}

const initialState: filtroState = {
    termo: ''
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        filtraTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        }    
    }
})

export const {filtraTermo} = filtroSlice.actions

export default filtroSlice.reducer