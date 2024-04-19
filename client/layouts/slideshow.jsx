import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
const SlideShow = ({slidesData}) => {
  // const slidesData = [
  //   {
  //     url: "https://mikazuki.com.vn/vnt_upload/weblink/_IKA9320_1.jpg",
  //   },
  //   {
  //     url: "https://mikazuki.com.vn/vnt_upload/weblink/Banner_e.jpg",
  //   },
  //   {
  //     url: "https://mikazuki.com.vn/vnt_upload/weblink/MAY01514_HDR.jpg",
  //   },
  //   {
  //     url: "https://mikazuki.com.vn/vnt_upload/weblink/Banner_5.jpg",
  //   },
  //   {
  //     url: "https://mikazuki.com.vn/vnt_upload/weblink/DJI_0063.png",
  //   },
  // ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);
  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slidesData.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === 4;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualChange) {
        nextSlide();
      }
      setIsManualChange(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isManualChange]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setIsManualChange(true);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto pb-16 pt-2 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slidesData[currentSlide].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="text-2xl hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white surcor-pointer">
        <FontAwesomeIcon onClick={prevSlide} icon={faArrowLeft} />
      </div>
      <div className="text-2xl hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white surcor-pointer">
        <FontAwesomeIcon onClick={nextSlide} icon={faArrowRight} />
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {slidesData.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              className=" text-sm p-1 text-black text-center hover:scale-150  duration-500"
            >
              <FontAwesomeIcon
                onClick={() => goToSlide(slideIndex)}
                icon={faCircle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideShow;
