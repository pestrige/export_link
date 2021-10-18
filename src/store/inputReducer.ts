import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { InputName, SelectName } from '../types/enums';

interface IInputPayLoad {
  value: string;
  type: InputName;
}
interface ISelectPayLoad {
  value: string | Array<string>;
  type: SelectName;
  label?: string;
}

interface IState {
  company: string;
  name: string;
  surname: string;
  appointment: string;
  email: string;
  comment: string;

  category: string | Array<string>;
  country: string | Array<string>;
  markets: string | Array<string>;
  lang: string | Array<string>;
  industry: string | Array<string>;
}

interface IAgreeState {
  agree: boolean;
}

const initialState = {
  company: '',
  name: '',
  surname: '',
  appointment: '',
  email: '',
  comment: '',

  category: '',
  country: '',
  markets: '',
  lang: '',
  industry: '',

  agree: false,
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state: IState, action: PayloadAction<IInputPayLoad>) => {
      const {value, type} = action.payload;
      state[type] = value;
    },
    setSelect: (state: IState, action: PayloadAction<ISelectPayLoad>) => {
      const {value, type} = action.payload;
      state[type] = value;
    },
    setAgree: (state: IAgreeState, action: PayloadAction<boolean>) => {
      state.agree = action.payload;
    }
  },
});

export const { setInput, setSelect, setAgree } = inputSlice.actions;

export default inputSlice.reducer;
