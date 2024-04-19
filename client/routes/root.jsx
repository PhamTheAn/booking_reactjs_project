import { createBrowserRouter } from "react-router-dom";
import RoomDetail from "../pages/room/roomDetailPage";
import MainHome from "../pages/home/mainHome";
import MainContentAdmin from "../pages/admin/mainContentAdmin";
import ListUser from "../pages/admin/user/listUser";
import ListRoom from "../pages/admin/room/listRoom";
import Login from "../pages/account/login";
import ListRoomPage from "../pages/room/listRoomPage";
import AddRoomForm from "../pages/admin/room/addRoom";
import FormUpdateRoom from "../pages/admin/room/formUpdateRoom";
import Registed from "../pages/account/registed";
import ListOrderinAdminPage from "../pages/admin/order/listOrderInAdminPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRouter from "../middleware/protectRouter";
import Profile from "../pages/account/profile";
import HistoryBooking from "../pages/account/history_booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome />,
    children: [
      {
        path: "room",
        element: <ListRoomPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registed",
        element: <Registed />,
      },
    ],
  },
  {
    path: "/roomdetail/:roomId",
    element: <RoomDetail />,
  },
  {
    path:"/profile",
    element: <Profile/>
  },
  {
    path:"/historyOrder",
    element: <HistoryBooking/>
  },
  {
    path: "/admin",
    element: <MainContentAdmin />,
    children: [
      {
        path: "user",
        element: <ListUser />,
      },
      {
        path: "room",
        element: <ListRoom />,
      },
      {
        path: "addRoom",
        element: <AddRoomForm />,
      },
      {
        path: `UpdateRoom/:roomId`,
        element: <FormUpdateRoom/>,
      },
      {
        path: 'order',
        element: <ListOrderinAdminPage/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
// const router = (
//   <Router>
//     <Routes>
//       <Route
//         path="/"
//         element={<MainHome />}
//       >
//         <Route path="room" element={<ListRoomPage />} />
//         <Route path="login" element={<Login />} />
//         <Route path="registed" element={<Registed />} />
//       </Route>

//       <Route path="/roomdetail/:roomId" element={<RoomDetail />} />

//       <Route
//         path="/admin"
//         element={<CheckRoleToGoToAdminRoute element={<MainContentAdmin />} />}
//       >
//         <Route path="user" element={<ListUser />} />
//         <Route path="room" element={<ListRoom />} />
//         <Route path="addRoom" element={<AddRoomForm />} />
//         <Route path="updateRoom/:roomId" element={<FormUpdateRoom />} />
//         <Route path="order" element={<ListOrderinAdminPage />} />
//       </Route>

//       {/* <Route path="/login" element={<Login />} /> */}
//     </Routes>
//   </Router>
// );
export default router;