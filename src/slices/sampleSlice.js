import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Muestra 1',
    date: new Date(),
    latitude: 1,
    longitude: 1,
    photo: ''
  },
  {
    id: 2,
    name: 'Muestra 2',
    date: new Date(),
    latitude: 1,
    longitude: 1,
    photo: ''
  },
  {
    id: 3,
    name: 'Muestra 3',
    date: new Date(),
    latitude: 1,
    longitude: 1,
    photo: ''
  },
];

const sampleSlice = createSlice({
  name: 'samples',
  initialState: initialState,
  reducers: {
    sampleDeleted: (state, action) => {

    }
  }
});

export const {sampleDeleted} = sampleSlice.actions

export default sampleSlice.reducer;