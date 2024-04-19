import React, { PureComponent, useEffect, useState } from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import SlideShowHome from "../home/slideShowHome";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useGetOneUserMutation } from "../../redux/api/userAPI";

const Profile = () => {
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const infoUser = jwtDecode(token);
      setUser(infoUser);
    }
  }, []);

  return (
    <>
      <Header />
      <SlideShowHome />
      <div className="max-w-[1200px] mx-auto">
        <div className=" text-4xl text-center font-serif uppercase">
          Infomation User
        </div>
        <div className="flex justify-center items-center border-b-1 mb-2">
          <Link
            to={"/profile"}
            class="   uppercase bg-transparent hover:text-green-500 text-green-500 duration-300 font-serif font-semibold  py-2 px-4  rounded"
          >
            Profile
          </Link>
          <span>|</span>
          <Link
            to={"/historyOrder"}
            class=" uppercase bg-transparent hover:text-green-500 text-gray-700 duration-300 font-serif font-semibold  py-2 px-4  rounded"
          >
            History Booking
          </Link>
          {user ? (
            <div>
              {user.user.roles.roleName == "admin" ? (
                <div>
                  <span>|</span>
                  <Link
                    to={"/admin"}
                    class=" uppercase bg-transparent hover:text-green-500 text-gray-700 duration-300 font-serif font-semibold  py-2 px-4  rounded"
                  >
                    Go to Admin Page
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <hr />
        <div>
          <div className="text-center block w-full">
            <div className="text-lg font-mono font-semibold my-4">
              Name: {user ? user.user.username : ""}
            </div>
            <div className="text-lg font-mono font-semibold my-4">
              Email: {user ? user.user.email : ""}
            </div>
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
