import {createSlice} from "@reduxjs/toolkit"

export const roomSlice = createSlice({
    name: "room",
    initialState: {
        rooms: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchRoomsStart: (state) => {
            state.isLoading = true;
        },
        fetchRoomsSuccess: (state, action) => {
            state.isLoading = false;
            state.rooms = action.payload;
        },
        fetchRoomsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        addRoomSuccess: (state, action) => {
            state.rooms.push(action.payload);
        },
        updateRoomSuccess: (state, action) => {
            const updateRoom = action.payload;
            state.rooms = state.rooms.map(room => room.id === updateRoom.id ? updateRoom : room)
        },
        deleteRoomSuccess: (state, action) => {
            state.rooms = state.rooms.filter(room => room.id !== action.payload)
        },
    },
});

export const {fetchRoomsStart, fetchRoomsSuccess, fetchRoomsFailure, addRoomSuccess, updateRoomSuccess, deleteRoomSuccess} = roomSlice.actions;
export default roomSlice.reducer;