import { createSlice } from "@reduxjs/toolkit";
import { Orders, PayloadType } from "../../../interfaces";



export interface CollectionState {
  orders: Orders[];
  type: string;
  name: string;
  _id: string;
  expired: boolean;
  upload: boolean;
}

const initialState: CollectionState = {
  expired: false,
  upload: false,
  orders: [],
  type: "Male",
  name: "",
  _id: ""
};

export const currentCollectionSlice = createSlice({
  name: "currentCollection",
  initialState,
  reducers: {
    setCollection: (state, action: PayloadType<CollectionState>) => {
      state._id = action.payload._id
      state.type = action.payload.type;
      state.orders = action.payload.orders;
      state.name = action.payload.name;
      state.expired = action.payload.expired
      state.upload = action.payload.upload
    },
    removeCollection: (state) => {
      state._id = initialState._id
      state.type = initialState.type;
      state.name = initialState.name;
      state.orders = initialState.orders;
      state.expired = initialState.expired
      state.upload = initialState.upload
    }
  }
});

export const { setCollection, removeCollection } =
  currentCollectionSlice.actions;

export default currentCollectionSlice.reducer;
