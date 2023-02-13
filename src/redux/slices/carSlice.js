import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
    prev: null,
    next: null,
    totalPages: null,
    errors: null,
    carForUpdate: null,

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateCar(id, car);
            thunkAPI.dispatch(getAll());
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteCar(id);
            return id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        clearErrors: (state) => {
            state.errors = null;
        },
        carForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload.items;
            state.prev = action.payload.prev;
            state.next = action.payload.next;
            state.totalPages = action.payload.total_pages;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload;
        })
        .addCase(createCar.fulfilled, (state, action) => {
            state.cars = [...state.cars, action.payload];
        })
        .addCase(deleteCar.fulfilled, (state, action) => {
            state.cars.splice(state.cars.findIndex(value => value.id === action.payload),1);
            state.cars = [...state.cars];
        })

});

const {reducer: carReducer, actions: {clearErrors, carForUpdate}} = carSlice;

const carActions = {
    getAll,
    createCar,
    updateCar,
    clearErrors,
    carForUpdate,
    deleteCar
};

export {
    carReducer,
    carActions
}