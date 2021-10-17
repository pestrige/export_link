import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { SelectName } from '../types/enums';
import { IOption } from '../types/interfaces';

interface IState {
  [SelectName.category]: string;
  [SelectName.country]: string;
  [SelectName.markets]: string;
}

const initialState = {
  [SelectName.category]: '',
  [SelectName.country]: '',
  [SelectName.markets]: '',
};

// export const multiSelectSlice = createSlice({
//   name: 'multiSelect',
//   initialState,
//   reducers: {
//     setMultiSelect: (state: IState, action: PayloadAction<IOption>) => {
//       const {value, type} = action.payload;
//       state[type] = value;
//     },
//   },
// });
//
// export const { setMultiSelect } = multiSelectSlice.actions;
//
// export default multiSelectSlice.reducer;
