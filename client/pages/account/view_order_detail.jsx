import React, { PureComponent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faXmark,
  faUser,
  faPhone,
  faCalendarDay,
  faComment,
  faMoneyBill1,
  faCreditCard,
  faListOl,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import { useGetOneOrderDetailMutation } from "../../redux/api/orderAPI";
import { useGetListRoomNumberByIdRoomMutation } from "../../redux/api/roomNumberAPI";
import { useUpdateStatusRoomNumberMutation } from "../../redux/api/roomNumberAPI";
import { useGetOneRoomNumberMutation } from "../../redux/api/roomNumberAPI";
import { useUpdateRoomNumberInOrderDetailMutation } from "../../redux/api/orderAPI";

const ViewOrderDetail = ({ isOpen, onClose, idOder }) => {
  const [dataOrderDetail, setDataOrderDetail] = useState("");
  const [idOrderDetail, setIdOrderDetail] = useState("");
  const [idRoomNumber, setIdRoomNumber] = useState("");
  const [valueRoomNumber, setValueRoomNumber] = useState([]);
  const [dataListNumberRoomByIdRoom, setDataListNumberRoomByIdRoom] = useState(
    []
  );
  const [
    GetOneOrderDetail,
    { isLoading, isError, error },
  ] = useGetOneOrderDetailMutation();

  const [
    GetListRoomNumberByIdRoom,
    { isLoadingRoomNumber, isErrorRoomNumber, errorRoomNumber },
  ] = useGetListRoomNumberByIdRoomMutation();

  const [UpdateStatusRoomNumber] = useUpdateStatusRoomNumberMutation();

  const [GetOneRoomNumber] = useGetOneRoomNumberMutation();

  const [
    UpdateRoomNumberInOrderDetail,
  ] = useUpdateRoomNumberInOrderDetailMutation();

  //Update status room number
  const handleUpdateStatusRoomNumber = async () => {
    const updateStatus = await UpdateStatusRoomNumber(idRoomNumber);
    if (!updateStatus.error) {
      toast.success("Confirm Status Room Number Successfull");
    }
  };
  const handleUpdateRoomNumberInOrderDetail = async () => {
    const updateRoomNumberInOrder = await UpdateRoomNumberInOrderDetail({
      id: idOrderDetail,
      dataRoomNumber: valueRoomNumber,
    });
    if (!updateRoomNumberInOrder.error) {
      toast.success("Confirm Room Number Successfull");
    }
  };

  // fetch order data
  useEffect(() => {
    const fetchDataOrderDetail = async () => {
      const result = await GetOneOrderDetail(idOder);
      setDataOrderDetail(result.data);
      setIdOrderDetail(result.data[0].id);
    };
    fetchDataOrderDetail();
  }, [idOder]);

  useEffect(() => {
    if (idRoomNumber) {
      const fetchDataRoomNumber = async () => {
        const result = await GetOneRoomNumber(idRoomNumber);

        setValueRoomNumber(result.data[0]);
      };
      fetchDataRoomNumber();
    }
  }, [idRoomNumber]);

  // fetch data room number
  useEffect(() => {
    const fetchDataRoomNumberByIdRoom = async () => {
      const result = await GetListRoomNumberByIdRoom(idRoom);
      setDataListNumberRoomByIdRoom(result.data);
    };
    fetchDataRoomNumberByIdRoom();
  }, [idOder]);

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  // handle change id room number
  const handleOnchangeIdRoomNumber = (e) => {
    setIdRoomNumber(e.target.value);
  };

  console.log(idRoomNumber);
  console.log(valueRoomNumber);
  console.log(idOrderDetail);
  console.log("dataOrderDetail", dataOrderDetail);
  return (
    <>
      <div
        onClick={handleOnClose}
        id="container"
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-gray-500 bg-opacity-10 flex items-center justify-center `}
      >
        <div className="bg-white rounded-lg p-8 relative  duration-300 z-10 animate__animated animate__fadeInDown min-w-[680px]">
          <button
            className="text-xl absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Booking information
          </h2>
          <form className="w-full font-mono">
            <div className="my-8 flex justify-between items-center">
              <div className="text-sm font-normal mx-4  text-start">
                <div className="flex">
                  <FontAwesomeIcon icon={faUser} className="pe-2 text-xl" />
                  <span>UserName:</span>
                </div>
                <span className="text-lg font-medium ">
                  {dataOrderDetail[0] ? dataOrderDetail[0].userName : ""}
                </span>
              </div>
              <div className="text-sm font-normal mx-4 ">
                <div className="flex">
                  <FontAwesomeIcon icon={faPhone} className="pe-2 text-xl" />
                  <span>UserPhoneNumber:</span>
                </div>
                <span className="text-lg font-medium ">
                  {dataOrderDetail[0] ? dataOrderDetail[0].userPhoneNumber : ""}
                </span>
              </div>
              <div className="text-sm font-normal mx-4 ">
                <div className="flex">
                  <FontAwesomeIcon icon={faHotel} className="pe-2 text-xl" />
                  <span>RoomName:</span>
                </div>
                <span className="text-lg font-medium ">
                  {dataOrderDetail[0] ? dataOrderDetail[0].roomName : ""}
                </span>
              </div>
            </div>
            <div className="my-8 flex justify-between items-center">
              <div className="text-sm font-normal mx-4  text-start">
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  className="pe-2 text-xl"
                />
                CheckInDate:
                <span className="text-lg font-medium  block">
                  {dataOrderDetail[0] ? dataOrderDetail[0].checkInDate : ""}
                </span>
              </div>
              <div className="text-sm font-normal mx-4  text-start">
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  className="pe-2 text-xl"
                />
                checkOutDate:
                <span className="text-lg font-medium  block">
                  {dataOrderDetail[0] ? dataOrderDetail[0].checkOutDate : ""}
                </span>
              </div>
            </div>
            <div className="my-8 flex justify-between items-center">
              <div className="text-sm font-normal mx-4  text-start">
                <div className="flex">
                  <FontAwesomeIcon icon={faListOl} className="pe-2 text-xl" />
                  <label htmlFor="roomNumber">RoomNumber:</label>
                </div>
                {dataOrderDetail[0] ? (
                  <div>
                    {dataOrderDetail[0].roomNumber == null ? (
                      <div className="text-lg font-medium text-center">
                        Wait confirmation
                      </div>
                    ) : (
                      <span className="text-lg font-medium text-center">
                        P{dataOrderDetail[0].roomNumber}
                      </span>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-sm font-normal mx-4  ">
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faMoneyBill1}
                    className="pe-2 text-xl"
                  />
                  <span>Price:</span>
                </div>
                <span className="text-lg font-medium mx-2">
                  {dataOrderDetail[0] ? dataOrderDetail[0].price : ""}
                  vnđ
                </span>
              </div>
              <div className="text-sm font-normal mx-4  ">
                <div className=" flex">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="pe-2 text-xl"
                  />
                  <label htmlFor="paymentStatus">Payment status:</label>
                </div>
                {dataOrderDetail[0] ? (
                  <div>
                    {dataOrderDetail[0].paymentStatus == false ? (
                      <span className="text-lg font-medium mx-2">Unpaid</span>
                    ) : (
                      <span className="text-lg font-medium mx-2">Paid</span>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className="text-left mx-4">
                <FontAwesomeIcon icon={faComment} className="pe-2 text-xl" />
                <span>Note:</span>
                <span className="text-lg font-medium mx-2">
                  {dataOrderDetail[0] ? dataOrderDetail[0].note : ""}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewOrderDetail;
