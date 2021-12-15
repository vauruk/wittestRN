/**
 *
 * @author Vanderson de moura Vauruk
 * 11/04/2021
 */

import { combineReducers } from '@reduxjs/toolkit';
import cityForm from '../city';
import weatherForm from '../weather';

const rootReducer = combineReducers({
    cityForm,
    weatherForm,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
