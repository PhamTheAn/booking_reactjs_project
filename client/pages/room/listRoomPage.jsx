import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useGetRoomsQuery } from "../../redux/api/roomAPI";
import {Link} from "react-router-dom"
import Header from "../../layouts/header";
import SlideShow from "../../layouts/slideshow";
import Footer from "../../layouts/footer";

const ListRoomPage = () => {
  const { data : rooms, error , isLoading} = useGetRoomsQuery()

  if(isLoading) {
    return <div>Loading ...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      
      <div className="text-2xl text-center font-serif mb-6">BOOKING DANANG</div>
      <div className="mainContent flex justify-between items-center flex-wrap  max-w-[1280px] m-auto">
        {rooms.map((room) => (
        <Link to={`/roomdetail/${room.id}`} key={room.id} className="w-1/2 px-6 mb-8">
          <div className="w-full h-[398px] overflow-hidden rounded-md" >
            <img className="rounded-md hover:scale-110 duration-1000 h-full  "
              src={`http://localhost:3000/images/${room.image}`}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center my-3 font-serif font-medium">
            <div className="name text-2xl">{room.roomname}</div>
            <div className="price text-2xl">{room.price} / Night</div>
          </div>
          <div className="line-clamp-2 texxt-sm font-medium text-gray-600 my-2">
            {room.description}
          </div>
          <Link to={`/roomdetail/${room.id}`} className="text-lg text-black hover:scale-110 duration-300 my-4 max-w-[110px] hover:text-red-400 overflow-hidden">
            Xem thêm <FontAwesomeIcon className="ms-1" icon = {faAngleRight}/>
          </Link>
        </Link>
        ))
        }

      </div>
    </>
  );
};
export default ListRoomPage;
