import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteRoomForm from "./deleteRoom";
import { Link } from "react-router-dom";

const ListRoom = () => {
  const ROOMSAPI = "http://localhost:3000/api/rooms";
  const [rooms, setRooms] = useState([]);
  const [idToDelete, setIdToDelete] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(ROOMSAPI);

        // Lưu trữ dữ liệu từ API vào state
        setRooms(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    };
    fetchRooms();
  }, []); // [] là dependency array, chỉ gọi useEffect một lần khi component được mount
  console.log(idToDelete);
  return (
    <>
      <a
        href={`/admin/addRoom`}
        className=" mt-2 duration-300 uppercase bg-transparent hover:bg-green-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
      >
        add room
      </a>
      <div className="container mt-4">
        <table className="table-fixed w-full">
          <thead className="mt-4">
            <tr className="bg-blue-400 text-white">
              <th className="  p-2 border  border-gray-300 ">#</th>
              <th className=" w-2/12 p-2 border  border-gray-300">Room name</th>
              <th className="  p-2 border  border-gray-300">Hotel name</th>
              <th className=" w-4/12 p-2 border  border-gray-300 ">
                Description
              </th>
              <th className="  p-2 border  border-gray-300">Price</th>
              <th className="  p-2 border  border-gray-300">Acreage</th>
              <th className="  p-2 border  border-gray-300">Image</th>
              <th className=" w-2/12  p-2 border  border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <React.Fragment>
              {rooms.map((room) => (
                <tr key={room.id} className="text-center">
                  <td className="border p-2">{room.id}</td>
                  <td className="border p-2">{room.roomname}</td>
                  <td className="border p-2">{room.namehotel}</td>
                  <td className="border p-2 text-xs">{room.description}</td>
                  <td className="border p-2">{room.price}</td>
                  <td className="border p-2">{room.acreage}</td>
                  <td className="border p-2">
                    <img
                      src={`http://localhost:3000/images/${room.image}`}
                      alt=""
                    />
                  </td>
                  <hr />
                  <td className="  px-4 py-2 flex  justify-between items-center my-auto">
                    <Link
                      to={`/admin/UpdateRoom/${room.id}`}
                      className="mt-2 duration-300 me-2 uppercase bg-transparent hover:bg-yellow-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        setIdToDelete(room.id);
                        openModal();
                      }}
                      className="mt-2 duration-300 uppercase bg-transparent hover:bg-red-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                    >
                      Delete
                    </button>
                  </td>
                  <DeleteRoomForm
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    roomId={idToDelete}
                  />
                </tr>
              ))}
            </React.Fragment>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListRoom;
