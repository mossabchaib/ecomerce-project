
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface Note {
  color:string;
number:number;
  }
  
  interface NoteState {
    notes: Array<Note>
  }
  
  const initialState: NoteState = {
    notes: [
      
    ]
  }

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
  pushColor:(state:any,actions:PayloadAction<any>)=>{
  
   state.notes[1]=actions.payload//.push(actions.payload)

  }
 },
  })
export const {pushColor} = colorSlice.actions

export const selectCart = (state: RootState) => state.color
export default colorSlice.reducer