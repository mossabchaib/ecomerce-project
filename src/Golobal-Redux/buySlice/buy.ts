import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  interface NoteState {
    mode: Boolean
  }
  
  const initialState: NoteState = {
    mode:false
  }

export const beySlice = createSlice({
  name: 'beySlice',
  initialState,
  reducers: {
  add:(state:any,actions:PayloadAction<any>)=>{
  state.mode=!state.mode
  }
 },
  })
export const {add} = beySlice.actions

export const selectCart = (state: RootState) => state.Buy
export default beySlice.reducer