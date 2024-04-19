import React, { PureComponent, useEffect, useState } from "react";
import { useGetOrderByIdUserMutation } from "../../redux/api/orderAPI";
import { useGetOneOrderDetailMutation } from "../../redux/api/orderAPI";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import SlideShowHome from "../home/slideShowHome";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewOrderDetailInAdmin from "../admin/order/ViewOrder_Detail_in_AdminPage";
import ViewOrderDetail from "./view_order_detail";

const HistoryBooking = () => {
  const [idUser, setIdUser] = useState("");
  const [user, setUser] = useState("");
  const [dataOrder, setDataOrder] = useState([]);
  const [idOrder, setIdOrder] = useState([]);
  const [GetOrderByIdUser] = useGetOrderByIdUserMutation();
  const token = localStorage.getItem("token");
  const [isModalOpen, setModalOpen] = useState(false);
  const [idOrderToViewDetail, setIdOrderToViewDetail] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (token) {
      const infoUser = jwtDecode(token);
      setIdUser(infoUser.user.id);
      setUser(infoUser);
    }
  }, [token]);

  useEffect(() => {
    const fetchDataOrder = async () => {
      const result = await GetOrderByIdUser(idUser);
      setDataOrder(result.data);
    };
    fetchDataOrder();
  }, [idUser]);

  console.log(idOrder);
  console.log("idUser", idUser);
  console.log("dataOrder", dataOrder);
  console.log(user);
  return (
    <>
      <Header />
      <SlideShowHome />
      <div className="max-w-[1200px] mx-auto min-h-[680px]">
        <div className=" text-4xl text-center font-serif uppercase">
          Infomation User
        </div>
        <div className="flex justify-center items-center border-b-1 mb-2">
          <Link
            to={"/profile"}
            class="   uppercase bg-transparent hover:text-green-500 text-gray-500 duration-300 font-serif font-semibold  py-2 px-4  rounded"
          >
            Profile
          </Link>
          <span>|</span>
          <Link
            to={"/historyOrder"}
            class=" uppercase bg-transparent hover:text-green-500 text-green-500 duration-300 font-serif font-semibold  py-2 px-4  rounded"
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
            <div>
              {dataOrder.length > 0 ? (
                <table className="table-fixed w-full">
                  <thead className="mt-4">
                    <tr className="bg-blue-400 text-white">
                      <th className="  p-2 border  border-gray-300 ">
                        #ID Order
                      </th>
                      <th className=" w-2/12 p-2 border  border-gray-300">
                        ID User
                      </th>
                      <th className="  p-2 border  border-gray-300">ID Room</th>
                      <th className=" w-3/12  p-2 border  border-gray-300">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <React.Fragment>
                      {dataOrder.map((order) => (
                        <tr key={order.id} className="text-center">
                          <td className="border p-2">{order.id}</td>
                          <td className="border p-2">{order.idUser}</td>
                          <td className="border p-2">{order.idRoom}</td>
                          <td className="px-4  py-2 flex  justify-center items-center my-auto border">
                            <button
                              onClick={() => {
                                setIdOrderToViewDetail(order.id);
                                openModal();
                              }}
                              className="  text-center mt-2 duration-300 uppercase bg-transparent hover:bg-green-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                            >
                              View Detail
                            </button>
                          </td>
                          <ViewOrderDetail
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            idOder={idOrderToViewDetail}
                          />
                        </tr>
                      ))}
                    </React.Fragment>
                  </tbody>
                </table>
              ) : (
                <div className="text-2xl font-serif my-4">
                  You have 0 bookings
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryBooking;
