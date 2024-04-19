import React from 'react'
import './index.css'
import  ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from '../routes/root';
import { Provider } from 'react-redux';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reduxStore from '../redux/store/reduxStore';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import MainHome from '../pages/home/mainHome';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router= {router}/>
       {/* Sử dụng BrowserRouter thay vì RouterProvider */}
      {/* <BrowserRouter>
        <MainHome/>
      </BrowserRouter> */}
    </Provider>
    <ToastContainer/>
  </React.StrictMode>
)
