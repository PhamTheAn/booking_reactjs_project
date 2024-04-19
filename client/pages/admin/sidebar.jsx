import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faClipboard,
  faHotel,
  faUsers,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import './admin.css'
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  const widthSidebar = {
    width: '18.125rem'
  }
  return (
    <>
      <div className=" flex h-screen w-1/5 flex-col overfolw-y-hidden bg-gray-700">
        <Link to="/" className="logo flex justify-between items-center">
          <img
            className=" rounded-sm w-16 h-16 m-2 mx-4"
            src="../../assets/images/BOOKING DANANG.png"
            alt=""
          />
          <p className="logo_text flex-1 w-auto text-2xl text-white font-mono">
            Booking DaNang
          </p>
        </Link>

        <div className="navbar mt-4 mx-4 ">
          <span className="text-lg text-white">Menu</span>
          <Link
            to="/admin/user"
            className="navbar_listUser text-2xl text-white mt-4 p-2 hover:bg-gray-500 rounded-sm block duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faUsers} /> List User
          </Link>

          <Link
            to="/admin/room"
            className="navbar_listUser text-2xl text-white mt-4 p-2 hover:bg-gray-500 rounded-sm block duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faList} /> Product-Room
          </Link>

          <Link
            to="/admin/order"
            className="navbar_listUser text-2xl text-white mt-4 p-2 hover:bg-gray-500 rounded-sm block duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faClipboard} /> Total Order
          </Link>

          <a
            href="#"
            className="navbar_listUser text-2xl text-white mt-4 p-2 hover:bg-gray-500 rounded-sm block duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faHotel} /> List Hotel
          </a>
        </div>
      </div>
      
    </>
  );
};

export default SidebarAdmin;
