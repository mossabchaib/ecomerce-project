
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    mode:boolean
  }
  
  const initialState: NoteState = {
   mode:false
  }

export const modeSlice = createSlice({
  name: 'modeSlice',
  initialState,
  reducers: {
  modeSid:(state:any,actions:PayloadAction<boolean>)=>{
    state.mode=!state.mode;
  }
 },
  })
export const {modeSid} = modeSlice.actions

export const selectCart = (state: RootState) => state.nv
export default modeSlice.reducer