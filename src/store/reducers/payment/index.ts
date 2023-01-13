import { createSlice } from '@reduxjs/toolkit';
import { PayloadType } from '../../../interfaces';

export interface IPayment {
  paymentStatus: 'success' | 'failed' | 'none';
  paymentType: 'add-categories' | 'new-collection' | 'none';
}

const initialState: IPayment = {
  paymentStatus: 'none',
  paymentType: 'none',
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentStatus: (
      state,
      action: PayloadType<'success' | 'failed' | 'none'>,
    ) => {
      state.paymentStatus = action.payload;
    },
    setPaymentType: (
      state,
      action: PayloadType<'add-categories' | 'new-collection' | 'none'>,
    ) => {
      state.paymentType = action.payload;
    },
  },
});

export const { setPaymentStatus, setPaymentType } = paymentSlice.actions;

export default paymentSlice.reducer;
