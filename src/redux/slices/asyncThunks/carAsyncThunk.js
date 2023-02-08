import {createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../../services";

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.update(id, car);
            thunkAPI.dispatch(getAll());
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.delete(id);
            return id;
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export {
    getAll,
    createCar,
    updateCar,
    deleteCar,
}