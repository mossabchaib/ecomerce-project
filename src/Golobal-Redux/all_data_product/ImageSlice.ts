
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface Note {
  image:string;
number:number;
  }
  
  interface NoteState {
    notes: Array<Note>
  }
  
  const initialState: NoteState = {
    notes: [
      
    ]
  }

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
  pushimage:(state:any,actions:PayloadAction<any>)=>{ 
   state.notes.push(actions.payload)
 
  }
 },
  })
export const {pushimage} = imageSlice.actions

export const selectCart = (state: RootState) => state.image
export default imageSlice.reducer