import React from "react";
import SlideShow from "../../layouts/slideshow";

const SlideShowHome = () => {
    const slidesData = [
    {
      url: "https://mikazuki.com.vn/vnt_upload/weblink/_IKA9320_1.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/weblink/Banner_e.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/weblink/MAY01514_HDR.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/weblink/Banner_5.jpg",
    },
    {
      url: "https://mikazuki.com.vn/vnt_upload/weblink/DJI_0063.png",
    },
  ];

  return(
    <>
        <SlideShow slidesData = {slidesData}/>
    </>
  )
}

export default SlideShowHome