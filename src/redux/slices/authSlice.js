
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    isAuthenticated: false
};


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, action) => {
            console.log("🚀 ~ action:", action)
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch users';
            });
    },

});
export const getProfile = state => state?.users?.user;
export const authenticated = state => state?.users?.isAuthenticated;
export const {
    signin,
    logout
} = authSlice.actions;
export default authSlice.reducer;