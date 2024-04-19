import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faArrowCircleUp, faUser, faCartShopping, faHotel } from "@fortawesome/free-solid-svg-icons";
import axios  from "axios";

const Dashboard =  () => {
  const [countUser, setCountUser] = useState('')
  const [countRoom, setCountRoom] = useState('')
  const [countOrder, setCountOrder] = useState('')
  useEffect(() => {

    axios.get("http://localhost:3000/api/users/findAndCount")
    .then((response) => {
      setCountUser(response.data.count)
    })
    axios.post("http://localhost:3000/api/orders/findAndCount")
    .then((response) => {
      setCountOrder(response.data.count)
    })
    axios.post("http://localhost:3000/api/rooms/countroom")
    .then((response) => {
      setCountRoom(response.data.count)
    })
    
    console.log(countUser);
    console.log(countRoom);
  },[countUser, countOrder, countRoom])

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7 mb-4">
        <div className="rounded border border-stroke bg-white py-6 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-4 text-xl text-blue-500 ">
          <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black text-left">
                {countUser}
              </h4>
              <span className="text-sm font-medium">Total User</span>
            </div>

            <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-500">
              19%
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </span>
          </div>
        </div>

        <div className="rounded border border-stroke bg-white py-6 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-4 text-xl text-blue-500">
          <FontAwesomeIcon icon={faBagShopping} />
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black text-left">
              {countRoom}
              </h4>
              <span className="text-sm font-medium">Total Product</span>
            </div>

            <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-500">
              25%
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </span>
          </div>
        </div>

        <div className="rounded border border-stroke bg-white py-6 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-4 text-xl text-blue-500">
          <FontAwesomeIcon icon={faCartShopping} />
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black text-left">
              {countOrder}
              </h4>
              <span className="text-sm font-medium">Total Order</span>
            </div>

            <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-500">
              12%
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </span>
          </div>
        </div>

        <div className="rounded border border-stroke bg-white py-6 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-4 text-xl text-blue-500">
          <FontAwesomeIcon icon={faHotel} />
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black text-left">
                0
              </h4>
              <span className="text-sm font-medium">Total Hotel</span>
            </div>

            <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-500">
              0%
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
