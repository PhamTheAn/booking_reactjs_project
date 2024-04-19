import React, { useEffect, useState } from "react";
import { useUpdateRoomMutation } from "../../../redux/api/roomAPI";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetOneRoomMutation } from "../../../redux/api/roomAPI";



const FormUpdateRoom =  () => {
  const [UpdateRoom, { isError, error, isLoading }] = useUpdateRoomMutation();
  const [GetOneRoom, { isErrorGetOneRoom, errorGetOneRoom, isLoadingGetOneRoom }] = useGetOneRoomMutation();
  const [updateRoomData, setUpdateRoomData] = useState({});
  const {roomId} = useParams();
  
  const [updateRoomDataOld, setUpdateRoomDataOld] = useState({});

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await GetOneRoom(roomId);
      const data = res.data
      console.log(data);
      setUpdateRoomDataOld(data)
      setUpdateRoomData(updateRoomDataOld)
    } catch (error) {
      console.error('Error fetching room:', error);
    }
  };
  
  fetchData();
}, [roomId]);
console.log(updateRoomDataOld);

  const handleSubmitFormUpdateRoom = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("roomname", updateRoomData.roomname);
      formData.append("namehotel", updateRoomData.namehotel);
      formData.append("description", updateRoomData.description);
      formData.append("price", updateRoomData.price);
      formData.append("acreage", updateRoomData.acreage);
      formData.append("image", updateRoomData.image);
      console.log("form data: ",formData);
      const data = await UpdateRoom({id: roomId, updateRoomData: formData});
      // const data = await axios.put(`http://localhost:3000/api/rooms/${roomId}`, formData);

      if(!data.error) {
        toast.success("Update Success")
      }else {
        toast.error(`${data.error.error}`)

      }
      console.log("Room added successfully:", data);
      setUpdateRoomData({})
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeUpdateRoomForm = (e) => {
    const newValue =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setUpdateRoomData({
      ...updateRoomData,
      [e.target.name]: newValue,
    });
  };

  console.log(updateRoomData);
  

  return (
    <>
      <div className="text-center text-3xl text-black m-6 uppercase">Form Update Room</div>
      <form
        onSubmit={handleSubmitFormUpdateRoom}
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
              value={updateRoomData.roomname || ""}
              onChange={handleChangeUpdateRoomForm}
              placeholder={updateRoomDataOld.roomname || ""}
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
              value={updateRoomData.namehotel || ""}
              onChange={handleChangeUpdateRoomForm}
              placeholder={updateRoomDataOld.namehotel || ""}
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
              className="h-48 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-green-500 focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="description"
              value={updateRoomData.description || ""}
              onChange={handleChangeUpdateRoomForm}
              placeholder={updateRoomDataOld.description || ""}
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
              value={updateRoomData.price || ""}
              onChange={handleChangeUpdateRoomForm}
              placeholder={updateRoomDataOld.price || ""}
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
              value={updateRoomData.acreage || ""}
              onChange={handleChangeUpdateRoomForm}
              placeholder={updateRoomDataOld.acreage || ""}
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
              // value={updateRoomData.image || ""}
              // onChange={onChangFile}
              onChange={handleChangeUpdateRoomForm}
              placeholder={updateRoomDataOld.image || ""}
            />
            <div className="block">
              <span>Old Image URL : {updateRoomDataOld.image} </span>
              <img src={`http://localhost:3000/images/`+updateRoomDataOld.image} className="w-64 h64" alt=""/>
            </div>
            {/* {updateRoomData.image
              ? "*Vì lý do bảo mật của trình duyệt , đường dẫn hình ảnh của bạn đã bị ẩn đi , nhưng ảnh của bạn đã được tải lên, vui lòng tiếp tục*"
              : ""} */}
            {updateRoomData.roomname && updateRoomData.namehotel && updateRoomData.description && updateRoomData.price && updateRoomData.acreage && updateRoomData.image ? 
            <button
            type="submit"
            class=" block mt-6 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Updated
            </button>
            : 
            <div>
              <div className="text-lg text-red-500 uppercase opacity-75">*Please enter all fields</div>
            <button
            disabled
            type=""
            class=" cursor-not-allowed block mt-6 shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Updated
            </button>
            </div>
            }
          </div>
        </div>
      </form>
    </>
  );
};

export default FormUpdateRoom;
