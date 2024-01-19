
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

export const CategorySlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
  pushCategory:(state:any,actions:PayloadAction<any>)=>{
  
   state.notes.push(actions.payload)

  }
 },
  })
export const {pushCategory} = CategorySlice.actions

export const selectCart = (state: RootState) => state.category
export default CategorySlice.reducer