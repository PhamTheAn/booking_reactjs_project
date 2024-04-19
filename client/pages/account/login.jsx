import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../layouts/footer";



const Login = () => {
  const loginApi ="http://localhost:3000/api/login"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(loginApi, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    });
    const data = await response.json()
    console.log(data);
    const token = data.token
    localStorage.setItem('token', token)
    if(data.result) {
      toast.success(`${data.result}`),
      setTimeout(() => {
        navigate('/'),
        window.location.reload()
      },1000)
    }
    else if(data.error) {
      toast.error(`${data.error}`)
    }
  }
  
  // if(isLoggedIn) {
  //   return( 
  //     navigate('/'),
  //     window.location.reload()
  //   )
  // }
  return (
    <>
      <div className="flex justify-center items-center border-b mb-8 max-w-[1280px] m-auto">
        <Link to="/login" className="me-8 px-2 text-lg py-4 border-b-2 border-green-500">
          <FontAwesomeIcon className="pe-2" icon={faRightFromBracket} />
          Đăng nhập
        </Link>
        <Link to="/registed" className=" text-lg px-2 py-4 hover:text-green-500">
          <FontAwesomeIcon className="pe-2" icon={faAddressCard} />
          Đăng ký
        </Link>
      </div>
      <div className="text-4xl text-center font-serif uppercase">Đăng nhập</div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-center m-auto py-8">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold font-serif md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              User name
            </label>
          </div>
          <div className="md:w-2/3">
            <input

              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold font-serif md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          {/* <div className="md:w-1/3"></div> */}
          <div className="block flex text-gray-500 font-bold">
            <input className="mr-2 leading-tight " type="checkbox" />
            <div className="text-sm font-serif">Ghi nhớ đăng nhập</div>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className=""></div>
          <div className="">
            <button
              className=" font-serif shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
