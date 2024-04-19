import React, { useEffect, useState } from "react";
import { useGetOrdersMutation } from "../../../redux/api/orderAPI";
import { Link } from "react-router-dom";
import ViewOrderDetailInAdmin from "./ViewOrder_Detail_in_AdminPage";
const ListOrderinAdminPage = () => {
    const [GetOrders] = useGetOrdersMutation();
    const [ordersData, setOrdersData] = useState([])
    const [isModalOpen, setModalOpen] = useState(false);
    const [idOrderToViewDetail, setIdOrderToViewDetail] = useState('');
    const [idRoomToGetListRoomNumber, setIdRoomToGetListRoomNumber] = useState('');

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    useEffect(() => {
      const getDataOrder = async () => {
        const result = await GetOrders()

        setOrdersData(result.data)
      }

      getDataOrder()
    },[])
console.log(ordersData);
  return (
    <>
      <div className="container mt-4">
        <table className="table-fixed w-full">
          <thead className="mt-4">
            <tr className="bg-blue-400 text-white">
              <th className="  p-2 border  border-gray-300 ">#ID Order</th>
              <th className=" w-2/12 p-2 border  border-gray-300">ID User</th>
              <th className="  p-2 border  border-gray-300">ID Room</th>
              <th className=" w-3/12  p-2 border  border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
          <React.Fragment>
            {ordersData.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.idUser}</td>
              <td className="border p-2">{order.idRoom}</td>
              <td className="px-4  py-2 flex  justify-between items-center my-auto border">
                <button onClick={() => {
                  setIdOrderToViewDetail(order.id);
                  setIdRoomToGetListRoomNumber(order.idRoom);
                  openModal();
                }} 
                className="mt-2 duration-300 uppercase bg-transparent hover:bg-green-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                  View Detail
                </button>
                <button className="mt-2 duration-300 uppercase bg-transparent hover:bg-red-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  Delete
                </button>
              </td>
              <ViewOrderDetailInAdmin isOpen={isModalOpen} onClose={closeModal} idOder={idOrderToViewDetail} idRoom={idRoomToGetListRoomNumber}/>
            </tr>
            ))}
          </React.Fragment>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListOrderinAdminPage;
