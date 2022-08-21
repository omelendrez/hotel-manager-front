import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';
import { UserModel } from './userModel';

const initialState = {
  id: 0,
  name: '',
  email: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      return action.payload;
    },
    resetUser: () => {
      return initialState;
    }
  },
});

export const { setUser, resetUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
