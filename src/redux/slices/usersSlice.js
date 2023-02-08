import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";


const initialState = {
    users: [],
    selectedUser: null,
    loading: null,
    errors: null,
};

const getAllAsync = createAsyncThunk(
    'usersSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await userService.getAll();
            thunkAPI.dispatch(usersActions.getAll(data));
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getByIdAsync = createAsyncThunk(
    'userSlice/getByIdAsync',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await userService.getById(id);
            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload;
        },
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
    extraReducers: {
        [getByIdAsync.fulfilled]: (state, action) => {
            state.loading = null;
            state.selectedUser = action.payload;
        },
        [getByIdAsync.pending]: (state) => {
            state.loading = true;
        }
    }
});


const {reducer: userReducer, actions: {getAll, selectUser}} = usersSlice;

const usersActions = {
    getAll,
    selectUser,
    getAllAsync,
    getByIdAsync,

}

export {
    usersActions,
    userReducer,
}