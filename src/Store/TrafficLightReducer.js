import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';



const trafficLightSlice = createSlice({
    name: 'trafficLight', initialState: {
        currentLight: 'red', loading: false
    }, reducers: {
        changeLight: (state) => {
            state.currentLight = state.currentLight === 'red' ? 'yellow' : state.currentLight === 'yellow' ? 'green' : 'red';
        },
        changeLoadingStatus: (state) => {
            state.loading = !state.loading
        }
    },
});

export const {changeLight, changeLoadingStatus} = trafficLightSlice.actions;

export default trafficLightSlice.reducer;

