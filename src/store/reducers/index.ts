/**
 *
 * @author Vanderson de moura Vauruk
 * 11/04/2021
 */

import { combineReducers } from '@reduxjs/toolkit';
import cityForm from '../city';

const rootReducer = combineReducers({
    cityForm,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
