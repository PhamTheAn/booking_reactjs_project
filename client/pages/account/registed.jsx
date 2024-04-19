import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { useAddUserMutation } from "../../redux/api/userAPI";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from "react-hook-form"



const Registed = () => {

  const [AddUser, { isError, error, isLoading }] = useAddUserMutation();
  const {register,handleSubmit, formState: { errors }} = useForm()


  const [registedData, setRegistedData] = useState({})

  const handleSubmitFormRegisted = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('username', registedData.username)
    // formData.append('email', registedData.email)
    // formData.append('password', registedData.password)

    const data = await AddUser(registedData)

    setRegistedData({})
    console.log("data:", data);
    if(data.error) {
      toast.error(`${data.error.data.error}`)
    }else if(data.data.result) {
      toast.success(`${data.data.result}`)
    }
  };

  const handleOnChangeFormRegisted = (e) => {
    setRegistedData({
        ...registedData,
        [e.target.name]: e.target.value
    })
  }

  console.log(registedData);

  return (
    <>
      <div className="flex justify-center items-center border-b mb-8 max-w-[1280px] m-auto">
        <Link
          to="/login"
          className="me-8 px-2 text-lg py-4 hover:text-green-500 duration-200"
        >
          <FontAwesomeIcon className="pe-2" icon={faRightFromBracket} />
          Đăng nhập
        </Link>
        <Link to="/registed" className=" text-lg px-2 py-4 border-b-2 border-green-500">
          <FontAwesomeIcon className="pe-2" icon={faAddressCard} />
          Đăng ký
        </Link>
      </div>
      <div className="text-4xl text-center font-serif uppercase">Đăng ký</div>
      <form
        onSubmit={handleSubmitFormRegisted}
        className="w-full max-w-sm flex flex-col items-center m-auto py-8"
      >
        <div className="md:flex md:items-center mb-6 w-full">
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
              name="username"
              value={registedData.username || ""}
              onChange={handleOnChangeFormRegisted}
              // {...register('userName',{ required: true })}
            />
              {/* {errors.userName && <span className="text-sm font-thin text-red-500" >*This field is required</span>} */}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 w-full">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold font-serif md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="email"
              name="email"
              value={registedData.email || ""}
              onChange={handleOnChangeFormRegisted}
              // {...register('email',{ required: true})}
            />
              {/* {errors.email && <span className="text-sm font-thin text-red-500" >*This field is required</span>} */}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 w-full">
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
              name="password"
              placeholder="******************"
              value={registedData.password || ""}
              onChange={handleOnChangeFormRegisted}
              // {...register('password',{ required: true  })}
            />
              {/* {errors.password && <span className="text-sm font-thin text-red-500" >*This field is required</span>} */}
          </div>
        </div>
   
        <div className="md:flex md:items-center">
          <div className=""></div>
          <div className="">
            {!registedData.username || !registedData.email || !registedData.password ? 
            <button
              disabled
              className="cursor-not-allowed font-serif shadow bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Sign Up
            </button>
            :
            <button
              className= "cursor-pointer font-serif shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Sign Up
            </button>
          }
          </div>
        </div>
      </form>
    </>
  );
};

export default Registed;
