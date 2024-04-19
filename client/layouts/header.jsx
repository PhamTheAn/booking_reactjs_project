import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const infoUser = jwtDecode(token);
        setUser(infoUser);
      } catch (error) {
        console.error("Error decoding token:", error);
        // Xử lý lỗi giải mã token ở đây (ví dụ: xóa token không hợp lệ)
        localStorage.removeItem("token");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Đăng xuất thành công");
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 1000);
  };
  console.log(user);

  return (
    <>
      <div className="flex max-w-[1480px] m-auto justify-between items-center shadow-b mb-2 h-20">
        <div className="nav-left flex justify-between items-center">
          <div className=" flex justify-between items-center pe-4">
            <Link to="/" className="logo w-16 h-16 flex">
              <img
                className=""
                src="../assets/images/BOOKING DANANG.png"
                alt=""
              />
            </Link>
            <Link
              to="/"
              className="text-2xl font-mono bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text"
            >
              BOOKING DANANG
            </Link>
          </div>
          <div className="navigation flex justify-between items-center text-lg mx-4">
            <Link
              to="/room"
              className=" no-underline mx-4  hover:scale-125 duration-500 ease-in-out uppercase "
            >
              Restroom
            </Link>
            <a
              href="#"
              className=" no-underline mx-4  hover:scale-125 duration-500 ease-in-out uppercase "
            >
              Contact
            </a>
            <a
              href="#"
              className=" no-underline mx-4  hover:scale-125 duration-500 ease-in-out uppercase "
            >
              About us
            </a>
          </div>
        </div>
        <div className="nav-right flex justify-between items-center">
          <div className="search mx-4">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="focus:outline-none mx-2 focus:border-b-gradient from-teal-400 to-blue-500"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="user flex items-center justify-betweent">
            <div className="name-user text-lg bg-gradient-to-br from-green-600 to-blue-500 text-transparent bg-clip-text">
              {user ? 
              <div className="flex items-center">
                {user.user.username}
                <Link to={'/profile'} className="text-xl text-black mx-2 cursor-pointer">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div> : 
                <Link
                  to='/login'
                  className=" mt-2 duration-300 uppercase bg-transparent hover:bg-green-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                >
                  Login
                </Link>
              }
            </div>
            {user ? (
              <div
                onClick={handleLogout}
                className="icon-user cursor-pointer text-2xl mx-2"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
