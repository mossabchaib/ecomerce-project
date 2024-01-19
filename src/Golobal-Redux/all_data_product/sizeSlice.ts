
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface Note {
  size:string;
number:number;
  }
  
  interface NoteState {
    notes: Array<Note>
  }
  
  const initialState: NoteState = {
    notes: [
      
    ]
  }

export const sizeSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
  pushsize:(state:any,actions:PayloadAction<any>)=>{  
   state.notes.push(actions.payload)

  }
 },
  })
export const {pushsize} = sizeSlice.actions

export const selectCart = (state: RootState) => state.size
export default sizeSlice.reducer