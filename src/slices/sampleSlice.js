import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const generateId = (samples) => {
  if (samples.length <= 0) {
    return 1;
  }
  return Math.max(...samples.map(sample => sample.id)) + 1;
}

const sampleSlice = createSlice({
  name: 'samples',
  initialState: initialState,
  reducers: {
    sampleAdded: (state, action) => {
      const newId = generateId(state);
      console.log(action.payload);
      console.log(newId)
      state.push({ ...action.payload, id: newId, name: `Muestra ${newId}` });
    },
    sampleDeleted: (state, action) => {
      const { id } = action.payload;
      const indexSample = state.map(sample => sample.id).indexOf(id);
      state.splice(indexSample, 1);
    }
  }
});

export const { sampleAdded, sampleDeleted } = sampleSlice.actions

export default sampleSlice.reducer;