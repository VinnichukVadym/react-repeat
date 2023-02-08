import {createSlice} from "@reduxjs/toolkit";

import {getAll, createCar, updateCar, deleteCar} from './asyncThunks';


const initialState = {
    cars: [],
    errors: [],
    selectedCar: null,
    loading: null,
};


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        selectCar: (state, action) => {
            state.selectedCar = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.loading = false;
            state.cars = action.payload;
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true;
        })
        .addCase(createCar.fulfilled, (state, action) => {
            state.cars = [...state.cars, action.payload];
        })
        .addCase(deleteCar.fulfilled, (state, action) => {
            state.cars.splice(state.cars.findIndex(({id}) => id === action.payload), 1);
            state.cars = [...state.cars];
        })

});


const {reducer: carReducer, actions: {selectCar}} = carSlice;

const carActions = {
    getAll,
    createCar,
    selectCar,
    updateCar,
    deleteCar,
};

export {
    carReducer,
    carActions,
}