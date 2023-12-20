import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchDataWithDelay = createAsyncThunk(
    'data/fetchWithDelay',
    async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = ['apple', 'banana', 'orange'];
                resolve(data);
            }, 10000); // Simulating a 2-second delay
        });
    }
);


const trafficLightSlice = createSlice({
    name: 'trafficLight', initialState: {
        currentLight: 'red', loading: false
    }, reducers: {
        changeLight: (state) => {
            state.currentLight = state.currentLight === 'red' ? 'yellow' : state.currentLight === 'yellow' ? 'green' : 'red';
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchDataWithDelay.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchDataWithDelay.fulfilled, (state, action) => {
                    state.loading = false;
                    state.items = action.payload;
                })
                .addCase(fetchDataWithDelay.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
        },
    },
});

export const {changeLight} = trafficLightSlice.actions;

export default trafficLightSlice.reducer;

