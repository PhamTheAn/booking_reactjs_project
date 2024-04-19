import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchUsersStart: (state) => {
            state.isLoading = true;
        },
        fetchUsersSuccess: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        fetchUsersFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        addUserSuccess: (state, action) => {
            state.users.push(action.payload)
        },
        updateUserSuccess:(state, action) => {
            const updateUser = action.payload;
            state.users = state.users.map(user => user.id === updateUser.id ? updateUser : user);
        },
        deleteUserSuccess: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
    },
});

export const {fetchUsersStart, fetchUsersSuccess, fetchUsersFailure, addUserSuccess, updateUserSuccess, deleteUserSuccess} = userSlice.actions;
export default userSlice.reducer