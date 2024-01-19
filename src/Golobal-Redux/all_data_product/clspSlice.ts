'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

interface Note {
  colorsp:string;
  numbersp:number;
  }
  
  interface NoteState {
    notes: Array<Note>
  }
  
  const initialState: NoteState = {
    notes: [],
    }

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
  pushColor:(state:any,actions:PayloadAction<any>)=>{
  const newNote=actions.payload
  state.notes.push(newNote); 
 }
 },
  })
export const {pushColor} = colorSlice.actions

export const selectCart = (state: RootState) => state.clsp
export default colorSlice.reducer