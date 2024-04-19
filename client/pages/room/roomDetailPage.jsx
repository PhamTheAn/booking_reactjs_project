import React, { useEffect, useState } from "react";
import SlideShow from "../../layouts/slideshow";
import Header from "../../layouts/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/roomdetail.css";
import { useParams } from "react-router-dom";
import { useGetOneRoomMutation } from "../../redux/api/roomAPI";
import axios from "axios";
import Footer from "../../layouts/footer";
import ModalFormOrder from "../order/modalFormOrder";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomDetail =  () => {
  const slidesData = [
    {
      url: "https://mikazuki.com.vn/vnt_upload/product/06_2021/Balcony.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/product/06_2021/Room_Overview.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/product/06_2021/Room_Overview_3.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/product/06_2021/Bathtub_3.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/product/06_2021/Double_Room.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/product/06_2021/Room_Overview_2.jpg",
    },
  ];

  const [GetOneRoom, { isErrorGetOneRoom, errorGetOneRoom, isLoadingGetOneRoom }] = useGetOneRoomMutation();
  const [roomDetail, setRoomDetail] = useState({});
  const {roomId}= useParams();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const result = await GetOneRoom(roomId);
        const data = result.data
        console.log(data);
        // const response = await axios.get(`http://localhost:3000/api/users/${roomId}`)
        // console.log("data: ", response.data);
        setRoomDetail(data)
      } catch (error) {
        console.error('Error fetching room:', error);
      }
    };
    fetchData();
  }, [roomId]);

  const roomFacilities = [
    {
      nameFacilities: "Ghế Sofa",
      image: "../../assets/images-facilities/mika_01.jpg",
    },
    {
      nameFacilities: "Khăn tắm",
      image: "../../assets/images-facilities/mika_02.jpg",
    },
    {
      nameFacilities: "Vòi hoa sen / Bồn tắm",
      image: "../../assets/images-facilities/mika_03.jpg",
    },
    {
      nameFacilities: "Két sắt",
      image: "../../assets/images-facilities/mika_04.jpg",
    },
    {
      nameFacilities: "Dép đi trong nhà",
      image: "../../assets/images-facilities/mika_05.jpg",
    },
    {
      nameFacilities: "Nước uống đóng chai miễn phí",
      image: "../../assets/images-facilities/mika_06.jpg",
    },
    {
      nameFacilities: "Tủ đựng áo quần",
      image: "../../assets/images-facilities/mika_07.jpg",
    },
    {
      nameFacilities: "Có bàn làm việc",
      image: "../../assets/images-facilities/mika_08.jpg",
    },
    {
      nameFacilities: "Vật dụng tắm rửa",
      image: "../../assets/images-facilities/mika_09.jpg",
    },
    {
      nameFacilities: "Ban công/sân hiên",
      image: "../../assets/images-facilities/mika_10.jpg",
    },
    {
      nameFacilities: "Điện thoại",
      image: "../../assets/images-facilities/mika_11.jpg",
    },
    {
      nameFacilities: "Tủ lạnh mini",
      image: "../../assets/images-facilities/mika_12.jpg",
    },
    {
      nameFacilities: "Điều hòa",
      image: "../../assets/images-facilities/mika_13.jpg",
    },
    {
      nameFacilities: "Áo choàng tắm",
      image: "../../assets/images-facilities/mika_14.jpg",
    },
    {
      nameFacilities: "Giường siêu lớn ",
      image: "../../assets/images-facilities/mika_15.jpg",
    },
    {
      nameFacilities: "Smart Tivi",
      image: "../../assets/images-facilities/mika_16.jpg",
    },
    {
      nameFacilities: "Máy sấy tóc",
      image: "../../assets/images-facilities/mika_17.jpg",
    },
    {
      nameFacilities: "Wi-Fi Free",
      image: "../../assets/images-facilities/mika_18.jpg",
    },
    {
      nameFacilities: "Không hút thuốc trong phòng",
      image: "../../assets/images-facilities/mika_19.jpg",
    },
    {
      nameFacilities: "Hệ thống vệ sinh tự động",
      image: "../../assets/images-facilities/mika_20.jpg",
    },
    {
      nameFacilities: "Bình chữa cháy",
      image: "../../assets/images-facilities/mika_21.jpg",
    },
    {
      nameFacilities: "Hệ thống báo cháy",
      image: "../../assets/images-facilities/mika_22.jpg",
    },
    {
      nameFacilities: "Bình đun nước siêu tốc",
      image: "../../assets/images-facilities/mika_24.jpg",
    },
  ];
  return (

    <>
      <Header />
      <SlideShow slidesData={slidesData} />

      <div className="content lg:max-w-[1024px] m-auto">
      <ModalFormOrder isOpen={isModalOpen} onClose={closeModal} roomName={roomDetail.roomname} price={roomDetail.price} idRoom={roomDetail.id}/>
        <div className=" flex justify-between items-center">
          <div className=" flex justify-around items-center" >
            <h1 className="text-4xl font-serif">{roomDetail.roomname}</h1>
            <div className="text-xl font-serif ms-4 bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text"> {roomDetail.price} vnđ / night </div>
          </div>
          <a onClick={(e) => {
              e.preventDefault();
              var token = localStorage.getItem('token')
              {token ? openModal(): toast.error("Xin vui lòng đăng nhập trước khi đặt phòng")}
              // openModal()
            }}
            className="cursor-pointer hover:scale-105 flex justify-betwent items-center py-2 px-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 font-serif duration-500 "
            
          >
            <p  className="text-lg text-white px-2 ">Booking now</p>
            
            <div className="text-lg text-white ">
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </a>
        </div>
        <div className="max-w-[780px] text-lg font-sans py-4">
          {roomDetail.description}
        </div>


        <div className="room-facilities">
          <div className="title text-xl font-bold pb-2">Room facilities:</div>
          <hr />
          <ul className="flex flex-wrap items-stretch">
            {roomFacilities.map((roomFacilitie) => {
              return(
              < >
              <li key={roomFacilitie} className="flex w-1/2 py-4 border-b">
                <span>
                  <img
                    className="icon-facilities"
                    src={roomFacilitie.image}
                    alt=""
                  />
                </span>
                <span className="text-lg">{roomFacilitie.nameFacilities}</span>
              </li>
              </>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RoomDetail;
