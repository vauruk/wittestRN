import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, CityResponse, FormState } from './types';

import moment from 'moment-timezone';
import { cityList } from '../mock/cityList';
import loadGravatar from '../../util/gravatar';

export const initialState: FormState = {
    loading: false,
    submitError: undefined,
    cityList: cityList,
    cityDetail: null,
};

export const fetchCityList = createAsyncThunk(
    'cityForm/list',
    async (args = undefined, thunkAPI) => {
        const {
            newsForm: { newsList },
        } = thunkAPI.getState() as RootState;

        try {
            const dataReturn = NewsService.listData();
            return dataReturn;
        } catch (error) {
            const {
                response: { data },
            } = error;
            return thunkAPI.rejectWithValue({ ...data });
        }
    },
);

export const cityFormSlice = createSlice({
    name: 'cityForm',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchCityList.pending, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = undefined;
            newstate.loading = true;
        });
        builder.addCase(
            fetchCityList.fulfilled,
            (state: FormState, action: PayloadAction<CityResponse>) => {
                const newstate = { ...state };
                const { weather } = action.payload;
                newstate.submitError = undefined;
                newstate.cityDetail = weather;

                newstate.loading = false;
                return newstate;
            },
        );
        builder.addCase(fetchCityList.rejected, (state: FormState) => {
            const newstate = { ...state };
            newstate.submitError = 'Error qualquer ';
            newstate.loading = false;
        });
    },
});

export default cityFormSlice.reducer;
