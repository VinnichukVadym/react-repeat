import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService, userService} from "../../services";

const initialState = {
    user: null,
    errors: null
};

const registerUser = createAsyncThunk(
    'carSlice/registerUser',
    async ({cred}, thunkAPI) => {
        try {
            const {data} = await userService.createUser(cred);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const loginUser = createAsyncThunk(
    'userSlice/loginUser',
    async ({cred}, thunkAPI) => {
        try {
            await authService.login(cred);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const me = createAsyncThunk(
    'userSlice/me',
    async (arg, thunkAPI) => {
        try {
            const {data} = await authService.me();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        userNotAuth: (state)=>{
            state.user = null;
        },
    },
    extraReducers: builder => builder
        .addCase(registerUser.rejected, (state, action) => {
            state.errors = action.payload;
        })
        .addCase(me.fulfilled, (state, action) => {
            state.user = action.payload;
        })

});

const {reducer: userReducer, actions:{userNotAuth}} = userSlice;

const userActions = {
    registerUser,
    loginUser,
    me,
    userNotAuth,

}

export {
    userReducer,
    userActions,
}