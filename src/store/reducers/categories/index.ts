import { createSlice } from '@reduxjs/toolkit';
import { Category, PayloadType } from '../../../interfaces';

interface CategoriesState {
  selectedCategories: string[];
  type: string;
  name: string;
}

const initialState: CategoriesState = {
  selectedCategories: [],
  type: '',
  name: '',
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadType<string>) => {
      state.selectedCategories = [
        ...state.selectedCategories,
        action.payload,
      ];
    },
    removeCategory: (state, action: PayloadType<string>) => {
      state.selectedCategories = [
        ...state.selectedCategories.filter((el) => el !== action.payload),
      ];
    },
    changeName: (state, action: PayloadType<string>) => {
      state.name = action.payload;
    },
    changeType: (
      state,
      action: PayloadType<string>,
    ) => {
      state.type = action.payload;
      state.selectedCategories = [];
    },
    clearState: (state) => {
      state.name = initialState.name
      state.type = initialState.type
      state.selectedCategories = initialState.selectedCategories
    }
  },
});

export const { addCategory, removeCategory, changeName, changeType, clearState } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
