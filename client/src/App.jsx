import React, {useState} from 'react';
import './App.css'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import { BrowserRouter, Outlet } from "react-router-dom";
import Login from '../pages/account/login';



function App() {
  const [token , setToken] = useState('');
  const handlelogin = (token) => {
    setToken(token)
  }

  return (
    <>
    <BrowserRouter>
      <Header/>
      <main>
        <Outlet/>
        <div>
          {!token ? <Login handlelogin={handlelogin} />: <p>You're logged in!</p> }
        </div>
      </main>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
