import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    _id:String,
    firstName:string;
    lastName:string;
   email:string;
password:string;
isActive:Boolean;
category_interiser:Array<string>;
  }
  
  const initialState: NoteState = {
    _id:"",
    firstName:'',
    lastName:'',
    email:'',
    password: '',
    isActive:false,
    category_interiser:[],
  }

export const Sign = createSlice({
  name: 'Sign',
  initialState,
  reducers: {
    addcontact: (state, action: PayloadAction<NoteState>) => {
      state._id=action.payload._id
      state.firstName=action.payload.firstName;
      state.lastName=action.payload.lastName;
   state.email=action.payload.email;
    state.password=action.payload.password;
    state.isActive=action.payload.isActive;
    // state.category_interiser.push(action.payload.category_interiser[]);
      },

  },
  })
export const {addcontact} = Sign.actions

export const selectCart = (state: RootState) => state.sign
export default Sign.reducer