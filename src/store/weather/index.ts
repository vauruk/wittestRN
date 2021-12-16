import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducers';
import { FormState, WeatherResponse } from './types';
import { WeatherService } from '../../services';

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    weather: undefined,
};

export const fetchWeatherList = createAsyncThunk(
    'weatherForm/fetchWeatherList',
    async (idCity: string, thunkAPI) => {
        const { wheather } = thunkAPI.getState() as RootState;
        try {
            const dataReturn = await WeatherService.getWheater(idCity);
            return dataReturn;
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);

export const weatherFormSlice = createSlice({
    name: 'weatherForm',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchWeatherList.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
            return newstate;
        });
        builder.addCase(
            fetchWeatherList.fulfilled,
            (state: FormState, action: PayloadAction<WeatherResponse>) => {
                const newstate = { ...state };
                newstate.weather = action.payload;
                newstate.loading = false;
                return newstate;
            },
        );
        builder.addCase(fetchWeatherList.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
            return newstate;
        });
    },
});

export default weatherFormSlice.reducer;
