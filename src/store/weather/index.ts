import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducers';
import { FormState, WeatherResponse } from './types';
import { WeatherService } from '../../services';

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    weatherList: undefined,
};

export const fetchWeatherList = createAsyncThunk(
    'weatherForm/list',
    async (args = undefined, thunkAPI) => {
        const {
            newsForm: { },
        } = thunkAPI.getState() as RootState;

        try {
            const dataReturn = WeatherService.listData();
            return dataReturn;
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);

export const newsFormSlice = createSlice({
    name: 'newsForm',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchWeatherList.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(
            fetchWeatherList.fulfilled,
            (state: FormState, action: PayloadAction<WeatherResponse>) => {
                const newstate = { ...state };
                const { weather } = action.payload;
                newstate.submitError = undefined;
                newstate.weatherList = weather;

                newstate.loading = false;
                return newstate;
            },
        );
        builder.addCase(fetchWeatherList.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
        });
    },
});

export default newsFormSlice.reducer;
