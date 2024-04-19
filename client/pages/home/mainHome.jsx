import React from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import SlideShowHome from "./slideShowHome";
import { Outlet, Routes, Route } from "react-router-dom";
import ListRoomPage from "../room/listRoomPage";
import Login from "../account/login";
import Registed from "../account/registed";
import MainContentAdmin from "../admin/mainContentAdmin";
import ListUser from "../admin/user/listUser";
import ListRoom from "../admin/room/listRoom";
import AddRoomForm from "../admin/room/addRoom";
import FormUpdateRoom from "../admin/room/formUpdateRoom";
import ListOrderinAdminPage from "../admin/order/listOrderInAdminPage";
import ProtectRouter from "../../middleware/protectRouter";
import About from "./about";
import DesHotel from "./des_hotel";

const MainHome = () => {
  return (
    <>
      <Header />
      <SlideShowHome />
      <Outlet/>
      <About/>
      <DesHotel/>
      <Footer />
      {/* <Routes>
          <Route path="room" element={<ListRoomPage />} />
          <Route path="login" element={<Login />} />
          <Route path="registed" element={<Registed />} />
      </Routes>

      <Routes>
        <Route element={<ProtectRouter />}>
          <Route path="/admin" element={<MainContentAdmin />}>
            <Route path="user" element={<ListUser />} />
            <Route path="room" element={<ListRoom />} />
            <Route path="addRoom" element={<AddRoomForm />} />
            <Route path="updateRoom/:roomId" element={<FormUpdateRoom />} />
            <Route path="order" element={<ListOrderinAdminPage />} />
          </Route>
        </Route>
      </Routes> */}
    </>
  );
};

export default MainHome;
