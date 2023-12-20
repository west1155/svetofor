// store.js
import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import trafficLightReducer from './TrafficLightReducer';

export const store = configureStore({
    reducer: {
        trafficLight: trafficLightReducer,
    },
});

