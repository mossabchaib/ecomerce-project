
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  interface NoteState {
    notes: Array<any>
  }
  
  const initialState: NoteState = {
    notes: [
      
    ]
  }

export const modeSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {
  pushAll:(state:any,actions:PayloadAction<any>)=>{
    console.log("state:",actions.payload)
    const existingNote = state.notes.find((id:any) =>{
      if(id.Pointure==actions.payload.Pointure&&
        id.Size==actions.payload.Size&&
        id.color==actions.payload.color) 
      return id.id&&id.id._id==actions.payload.id._id
      });
    if (!existingNote) {
     const newNote = { ...actions.payload, quantite: 1 };
     state.notes.push(newNote); 
  }
 },
 remove: (state, action: PayloadAction<any>) => {
   
  const id = action.payload.id._id;
  console.log("id:",id)  ;
 let notess:any=[];
  let i:number=0;
  for (let index = 0; index < state.notes.length; index++) {
    state.notes
 if(state.notes[index].Pointure == action.payload.Pointure &&
       state.notes[index].Size == action.payload.Size &&
       state.notes[index].color == action.payload.color &&
       state.notes[index].id._id ==id)console.log("true")
    else{ notess[i]=state.notes[index];i++}
  }
  state.notes=[...notess];
},
plusQuantite: (state, actions: PayloadAction<any>) => {
  const existingNote = state.notes.find((id:any) =>{
    if(id.Pointure==actions.payload.Pointure&&
      id.Size==actions.payload.Size&&
      id.color==actions.payload.color) 
    return id.id._id==actions.payload.id._id
    });
  if( existingNote  ) existingNote.quantite++;
},
minseQuantite: (state, actions: PayloadAction<any>) => {
  const existingNote = state.notes.find((id:any) =>{
    if(id.Pointure==actions.payload.Pointure&&
      id.Size==actions.payload.Size&&
      id.color==actions.payload.color) 
    return id.id._id==actions.payload.id._id
    });
    console.log('existingNote:');
    console.log('existingNote:',existingNote);
  if( existingNote ){
   
    existingNote.quantite--;}
}
  }})
export const {pushAll,remove,minseQuantite,plusQuantite} = modeSlice.actions

export const selectCart = (state: RootState) => state.card
export default modeSlice.reducer