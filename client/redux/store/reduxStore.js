import { configureStore } from "@reduxjs/toolkit";
import { roomsApi } from "../api/roomAPI";
import { usersApi } from "../api/userAPI";
import { ordersApi } from "../api/orderAPI";
import { roomNumbersApi } from "../api/roomNumberAPI";
import roomSlice from "../slice/roomSlice";
import userSlice from "../slice/userSlice";
import orderSlice from "../slice/orderSlice";
import roomNumberSlice  from "../slice/roomNumber";

const reduxStore = configureStore({
    reducer: {
        rooms: roomSlice.reducer,
        users: userSlice.reducer,
        orders: orderSlice.reducer,
        roomNumbers: roomNumberSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [roomsApi.reducerPath]: roomsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [roomNumbersApi.reducerPath]: roomNumbersApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(roomsApi.middleware, usersApi.middleware, ordersApi.middleware, roomNumbersApi.middleware),
});

export default reduxStore;