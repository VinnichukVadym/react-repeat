import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

export type IState = {
    cars: ICar[];
    carById: ICar | null;
    carForUpdate: ICar | null;
}

const initialState: IState = {
    cars: [],
    carById: null,
    carForUpdate: null,
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const getById = createAsyncThunk<ICar, { id: string }>(
    'carSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const createCar = createAsyncThunk<ICar, { car: ICar }>(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const deleteCar = createAsyncThunk<string, { id: string }>(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteCar(id);
            return id;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const updateCar = createAsyncThunk<ICar, { id: string, car: ICar }>(
    'carSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateCar(id, car);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        chooseCar: (state, action): void => {
            state.carById = action.payload;
        },
        carForUpdate: (state, action): void => {
            state.carForUpdate = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.carById = action.payload;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.cars.splice(state.cars.findIndex(value => value.id === +action.payload), 1)
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(v => v.id === action.payload.id);
                Object.assign(state.cars[index], action.payload);
            })
});

const {reducer: carReducer, actions: {chooseCar, carForUpdate}} = carSlice;

const carActions = {
    getAll,
    getById,
    chooseCar,
    createCar,
    deleteCar,
    carForUpdate,
    updateCar,
}

export {
    carReducer,
    carActions,
}