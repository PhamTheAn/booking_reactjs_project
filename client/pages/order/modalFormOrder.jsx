import React, { Component, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "moment-timezone";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useAddOrderMutation } from "../../redux/api/orderAPI";
import {useForm} from "react-hook-form"

const ModalFormOrder = ({ isOpen, onClose, roomName, price, idRoom }) => {
  const [
    AddOrder,
    { isErrorGetOneRoom, errorGetOneRoom, isLoadingGetOneRoom },
  ] = useAddOrderMutation();

  const [user, setUser] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [dataOrderRoom, setDataOrderRoom] = useState({});
  const [userName, setUserName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [note, setNote] = useState('');
  const {register,handleSubmit, formState: { errors }} = useForm()

  useEffect(() => {
    setDataOrderRoom({
      roomName: roomName,
      quantityDateOrder: quantityDateOrder,
      price: price,
      paymentStatus: false,
      idUser: idUser,
      idRoom: idRoom,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      userName: userName,
      userPhoneNumber: userPhoneNumber,
      note: note,
    });
  }, [idRoom, checkInDate, checkOutDate, userName, userPhoneNumber, note]);


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const infoUser = jwtDecode(token);
        setUser(infoUser);
      } catch (error) {
        console.error("Error decoding token:", error);
        // Xử lý lỗi giải mã token ở đây (ví dụ: xóa token không hợp lệ)
        // localStorage.removeItem("token");
      }
    }
  }, []);

  if (user !== null) {
    var idUser = user.user.id;
  }

  console.log("idUser: ", idUser);

  // Đặt mindate = tomorow
  const tomorow = new Date(checkInDate.getTime());
  tomorow.setDate(tomorow.getDate() + 1);
  console.log(checkInDate, checkOutDate);

  //Tính số ngày đặt phòng
  const spaceTime = checkOutDate.getTime() - checkInDate.getTime();
  const quantityDateOrder = Math.ceil(spaceTime / (1000 * 3600 * 24));

  // const handleChange = (e) => {
  //   const newValue = e.target.type ==="date" ? e.target.selected : e.target.value;
  //   console.log("selected",e.target.selected);
  //   setDataOrderRoom({
  //     ...dataOrderRoom,
  //     [e.target.name]: newValue,
  //   });
  // };

  const handleOnSubmitFormBooking = async (e) => {
    e.preventDefault();
    const dataOrder = await AddOrder(dataOrderRoom);

    console.log(dataOrder);

    if (dataOrder.data.result) {
      toast.success(dataOrder.data.result);
      setTimeout(() => {
        window.location.reload()

      },3000)
    } else if (dataOrder.data.error) {
      toast.error(dataOrder.data.error);
    }

    setDataOrderRoom({})
  };

  console.log(dataOrderRoom);
  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };
  return (
    <>
      <div
        onClick={handleOnClose}
        id="container"
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center `}
      >
        <div className="bg-white rounded-lg p-8 relative  duration-300 z-10 animate__animated animate__fadeInDown ">
          <button
            className="text-xl absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Booking information
          </h2>
          <form onSubmit={handleOnSubmitFormBooking} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  User Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="grid-first-name"
                  name="userName"
                  type="text"
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                  placeholder="Jane"
                />

              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  User Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="grid-last-name"
                  type="text"
                  name="userPhoneNumber"
                  onChange={(e) => {
                    setUserPhoneNumber(e.target.value)
                  }}
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Check-in Date
                </label>
                <div>
                  <DatePicker
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                    selected={checkInDate}
                    onChange={(date)=> {
                      // handleChange
                      setCheckInDate(date)
                    }}
                    minDate={new Date()} // Ngày đặt phòng
                    name="checkInDate"
                    placeholderText="Chọn ngày nhận phòng"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Check-out Date
                </label>
                <DatePicker
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  selected={checkOutDate}
                  onChange={(date) => {  
                    // handleChange
                    setCheckOutDate(date)
                  }}
                  minDate={tomorow} // Ngày đặt phòng
                  name="checkInDate"
                  placeholderText="Chọn ngày nhận phòng"
                  dateFormat="dd/MM/yyyy"
                />
                {quantityDateOrder <= 0 ? (
                  <div className="text-sm text-gray-500 ">
                    *Check-in date is always greater than check-out date
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Note
                </label>
                <textarea
                  className="h-36 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                  id="grid-city"
                  type="text"
                  name="note"
                  onChange={(e) => {
                    setNote(e.target.value)
                  }}
                  placeholder="-Giờ nhận phòng, số lượng người ..."
                />
              </div>
            </div>
            <h3 className="text-2xl">Confirm room information: </h3>
            <div className="text-lg my-2 font-semibold">
              Room name: {roomName}
            </div>
            <div className="text-lg my-2 font-semibold ">
              Price for {quantityDateOrder} day : {quantityDateOrder * price}{" "}
              vnđ
            </div>
            {quantityDateOrder <= 0 ? (
              <div>
                <button
                  disabled
                  class="cursor-not-allowed bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded duration-200"
                >
                  Book
                </button>
              </div>
            ) : (
              <button
                type="submit"
                class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded duration-200"
              >
                Book
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalFormOrder;
