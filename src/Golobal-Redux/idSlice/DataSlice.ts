'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    _id:string;
  price:string;
title:string;
description:string;
category:string;
stock: String,
Global_category:String,
image:Array<string>,
      color:Array<string>,
      pointure:Array<string>,
      size:Array<string>,
  }
  
  const initialState: NoteState = {
    _id: '',
    price:'',
    description:'',
    title: '',
    category:'',
    stock: '',
    Global_category:'',
    image:[],
    color:[],
    pointure:[],
    size:[],
  }

export const AddToid = createSlice({
  name: 'AddToid',
  initialState,
  reducers: {
    addId: (state, action: PayloadAction<NoteState>) => {
      console.log("action.payload:",action.payload.color)
   state._id=action.payload._id;
    state.title=action.payload.title;
    state.price=action.payload.price;
    state.description=action.payload.description;
    state.category=action.payload.category;
    state.stock=action.payload.stock;
    state.Global_category=action.payload.Global_category;
    state.color.push(action.payload.color[1]);
    state.size.push(action.payload.size[0]);
    state.pointure.push(action.payload.pointure[0]);
    state.image.push(action.payload.image[0])
      },

  },
  })

export const {addId} = AddToid.actions

export const selectCart = (state: RootState) => state.id
export default AddToid.reducer