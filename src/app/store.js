import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import weatherGraphReducer from '../features/weathergraph/weatherSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        weatherGraph : weatherGraphReducer,
    },
})
