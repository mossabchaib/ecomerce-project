import { configureStore } from '@reduxjs/toolkit'
import idReducer from './idSlice/DataSlice'
import allReducer from './all_data_product/colorSlice'
import BuyReducer from './buySlice/buy'
import nvReducer from './navStyle/nsv'
import loginReducer from './loginSlice/login'
import SignReducer from './signSlice/sign'
import modeSlice from './mode side-bar/SidSlice'
import checkReducer from './Category/categorySice'
import colorReducer from './all_data_product/colorSlice'
import sizeReducer from './all_data_product/sizeSlice'
import pointureReducer from './all_data_product/pointurSlice'
import imageReducer from './all_data_product/ImageSlice'
import clspSlice from './all_data_product/clspSlice'
import categorySlice from './all_data_product/categorySlice'
import cardSlice from './allProduct/AllSlice'
export const Store = configureStore({
  reducer: {
    card:cardSlice,
    category:categorySlice,
    clsp:clspSlice,
    color:colorReducer,
    image:imageReducer,
    pointure:pointureReducer,
    size:sizeReducer,
    check:checkReducer,
    sign:SignReducer,
    login:loginReducer,
    nv:nvReducer,
    Buy:BuyReducer,
    all:allReducer,
    id:idReducer,
mode:modeSlice,
  },})

export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch