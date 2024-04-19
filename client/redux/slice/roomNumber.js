import {createSlice} from "@reduxjs/toolkit"
export const roomNumberSlice = createSlice({
    name: "roomNumber",
    initialState: {
        roomNumbers: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchRoomNumberStart: (state) => {
            state.isLoading = true;
        },
        fetchRoomNumberSuccess: (state, action) => {
            state.isLoading = false;
            state.roomNumbers = action.payload;
        },
        fetchRoomNumberFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        addRoomNumberSuccess: (state, action) => {
            state.roomNumbers.push(action.payload);
        },
        updateRoomNumberSuccess: (state, action) => {
            const updateRoomNumber = action.payload;
            state.roomNumbers = state.roomNumbers.map(roomNumber => roomNumber.id === updateRoomNumber.id ? updateRoomNumber : roomNumber)
        },
        deleteRoomNumberSuccess: (state, action) => {
            state.roomNumbers = state.roomNumbers.filter(roomNumber => roomNumber.id !== action.payload)
        },
    },
});

export const {fetchRoomNumberStart, fetchRoomNumberSuccess, fetchRoomNumberFailure, addRoomNumberSuccess, updateRoomNumberSuccess, deleteRoomNumberSuccess} = roomNumberSlice.actions;
export default roomNumberSlice.reducer;