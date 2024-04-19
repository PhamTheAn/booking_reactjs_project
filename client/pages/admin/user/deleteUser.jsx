import React, { useState } from "react";
import { useDeleteUserMutation } from "../../../redux/api/userAPI"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteUserForm = ({ isOpen, onClose, userId }) => {
  const [DeleteUser, { isLoading, isError, error }] = useDeleteUserMutation();
  const handleOnClose = (e) => {
    if(e.target.id === "container") {
        onClose()
    }
  }
  return (
    <>
      <div
        onClick={handleOnClose}
        id="container"
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-gray-500 bg-opacity-10 flex items-center justify-center `}
      >
        <div className="bg-white rounded-lg p-8 relative  duration-300">
          <button
            className="text-xl absolute top-0 right-0 m-2 text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h2 className="text-2xl font-bold mb-4">
            Are you sure about that ?
          </h2>
          <form className="flex justify-around">
            <button
              onClick={onClose}
              className="mx-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 duration-200"
            >
              No <FontAwesomeIcon icon={faXmark} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault(),
                DeleteUser(userId),
                toast.success("Xóa người dùng thành công")
                console.log("Room id: ", userId);
                onClose() 
                setTimeout(() => {
                    window.location.reload()
                },1000)
              }}
              className="mx-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 duration-200"
            >
              Yes <FontAwesomeIcon icon={faCheck} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteUserForm
