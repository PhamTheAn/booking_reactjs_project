import {createSlice} from "@reduxjs/toolkit"

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchOrdersStart: (state) => {
            state.isLoading = true;
        },
        fetchOrdersSuccess: (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        },
        fetchOrdersFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        addOrdersuccess: (state, action) => {
            state.orders.push(action.payload);
        },
        updateOrdersuccess: (state, action) => {
            const updateOrder = action.payload;
            state.orders = state.orders.map(order => order.id === updateOrder.id ? updateOrder : order)
        },
        deleteOrdersuccess: (state, action) => {
            state.orders = state.orders.filter(order => order.id !== action.payload)
        },
    },
});

export const {fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure, addOrdersuccess, updateOrdersuccess, deleteOrdersuccess} = orderSlice.actions;
export default orderSlice.reducer;