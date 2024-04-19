import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteUserForm from "./deleteUser";

const ListUser = () => {
  const USERAPI = "http://localhost:3000/api/users/";
  const [users, setUsers] = useState([]);
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
        const response = await axios.get(USERAPI);

        // Lưu trữ dữ liệu từ API vào state
        setUsers(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="  px-4 py-2">#</th>
              <th className="  px-4 py-2">User Name</th>
              <th className="  px-4 py-2">Email</th>
              <th className="  px-4 py-2">Role</th>
              <th className="  px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <React.Fragment>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2 text-center">{user.id}</td>
                  <td className="border px-4 py-2 text-center">{user.username}</td>
                  <td className="border px-4 py-2 text-center">{user.email}</td>
                  <td className="border px-4 py-2 text-center">{user.roles[0]}</td>
                  <td className="border-t  px-4 py-2 flex  justify-between items-center my-auto">
                    <a
                      href="#"
                      className="mt-2 duration-300 me-2 uppercase bg-transparent hover:bg-yellow-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => {
                        setIdToDelete(user.id),
                        openModal(),
                        console.log(user.id);
                      }}
                      className="mt-2 duration-300 uppercase bg-transparent hover:bg-red-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                    >
                      Delete
                    </button>
                  </td>
                  <DeleteUserForm
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    userId={idToDelete}
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

export default ListUser;
