
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface Note {
  pointure:string;
number:number;
  }
  
  interface NoteState {
    notes: Array<Note>
  }
  
  const initialState: NoteState = {
    notes: [
      
    ]
  }

export const pointureSlice = createSlice({
  name: 'pointure',
  initialState,
  reducers: {
  pushpointure:(state:any,actions:PayloadAction<any>)=>{  
   state.notes.push(actions.payload)

  }
 },
  })
export const {pushpointure} = pointureSlice.actions

export const selectCart = (state: RootState) => state.pointure
export default pointureSlice.reducer