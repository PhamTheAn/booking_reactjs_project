import { useAddRoomMutation } from "../../../redux/api/roomAPI";
import { useEffect, useState } from "react";
import { last, values } from "lodash";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRoomForm = () => {
  const [AddRoom, { isError, error, isLoading }] = useAddRoomMutation();
  const [newRoom, setNewRoom] = useState({});
  const [isAddedRoom, setIsAddedRoom] = useState(false);
  const navigate = useNavigate();

  const handleSubmitFormAddRoom = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("roomname", newRoom.roomname);
      formData.append("namehotel", newRoom.namehotel);
      formData.append("description", newRoom.description);
      formData.append("price", newRoom.price);
      formData.append("acreage", newRoom.acreage);
      formData.append("image", newRoom.image);
      const data = await AddRoom(formData);
      console.log("data:", data);

      if (data.data.result) {
        toast.success(data.data.result);
        setIsAddedRoom(true);
      } else if (data.error.data.error) {
        toast.error(data.error.data.error);
      }

      setNewRoom({});
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeAddRoomForm = (e) => {
    const newValue =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setNewRoom({
      ...newRoom,
      [e.target.name]: newValue,
    });
  };
  if (isAddedRoom) {
    setTimeout(() => {
      navigate("/admin/room");
    }, 1000);
  }

  console.log(newRoom);
  return (
    <>
      <form
        onSubmit={handleSubmitFormAddRoom}
        className="max-w-screen-sm m-auto pt-4 "
        encType="multipart/form-data"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Room name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-green-500 focus:bg-white"
              id="grid-first-name"
              type="text"
              name="roomname"
              onChange={handleChangeAddRoomForm}
              placeholder=""
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Name hotel
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-green-500 focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="namehotel"
              onChange={handleChangeAddRoomForm}
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-green-500 focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="description"
              onChange={handleChangeAddRoomForm}
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-green-500 focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="price"
              onChange={handleChangeAddRoomForm}
              placeholder=""
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Acreage
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-green-500 focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="acreage"
              onChange={handleChangeAddRoomForm}
              placeholder=""
            />
          </div>
          <div className="w-full md:w-full mt-6 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Image
            </label>
            <input
              className="appearance-none block w-full mb-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-green-500 focus:bg-white"
              id="grid-zip"
              type="file"
              name="image"
              // onChange={onChangFile}
              onChange={handleChangeAddRoomForm}
              placeholder=""
            />
            {!newRoom.roomname ||
            !newRoom.namehotel ||
            !newRoom.description ||
            !newRoom.price ||
            !newRoom.acreage ||
            !newRoom.image ?
             (
              <div >
              <span className="text-sm text-red-500 opacity-75 uppercase">*Please enter all fields*</span>
              <button
              disabled
                class="cursor-not-allowed block mt-6 shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Add room
              </button>
              </div>
            ) 
            : 
            (
              <button
                type="submit"
                class=" block mt-6 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Add room
              </button>
            )}
            
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRoomForm;
