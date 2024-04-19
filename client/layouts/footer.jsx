import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer bg-contain bg-no-repeat relative -z-10">
        <div className="footer-content bg-current absolute w-full h-full opacity-75  px-48">
          <div className="footer-content-1 flex justify-between mt-12 ">
            <div className="logo flex justify-between ">
              <a href="">
                <img
                  className="rounded-sm w-20 h-20"
                  src="../assets/images/BOOKING DANANG.png"
                  alt=""
                />
              </a>
              <div className="slogan font-serif mt-2">
                <div className="text-2xl text-white mx-2 font-serif ">
                  Booking Da Nang
                </div>
                <div className="text-2xl text-white mx-2 font-serif ">
                  Resort & Home stay
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content-2 flex justify-between mt-12 mb-2">
            <div className="desc font-mono content-2-left w-1/2 ">
              <div className=" mt-3 text-white text-2xl">
                CÔNG TY TNHH BOOKING VIỆT NAM
              </div>
              <div className=" mt-3 text-white text-lg">
                Địa chỉ: Khu du lịch Xuân Thiều, Đ. Nguyễn Tất Thành, P. Hòa
                Hiệp Nam, Q. Liên Chiểu, TP Đà Nẵng.
              </div>
              <div className=" mt-3 text-white text-sm">
                Email: sales@mikazuki.com.vn | info@mikazuki.com.vn{" "}
              </div>
              <div className=" mt-3 text-white text-sm">
                Điện thoại: 02363 774 555{" "}
              </div>
            </div>
            <div className="content-2-right flex px-2 font-mono ">
              <div className="block1 me-6">
                <div className="title text-2xl text-white">
                  CÔNG VIÊN NƯỚC 365
                </div>
                <p className="mt-2 text-white text-lg">
                  Điện thoại: 02363 767 888
                </p>
                <p className="mt-2 text-white text-sm">
                  Email: info@mikazukiwaterpark.com
                </p>
              </div>
              <div className="block1">
                <div className="title text-2xl text-white">THẺ THÀNH VIÊN</div>
                <p className="mt-2 text-white text-lg">
                  Điện thoại: 02363 774 555
                </p>
                <p className="mt-2 text-white text-sm">
                  Email: info@mikazuki.com.vn
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="footer-content-3 flex justify-between items-center mt-2 ">
            <div className="brand flex justify-between mt-4 items-center ">
              <a className="me-8" href="">
                <img
                  src="https://mikazuki.com.vn/vnt_upload/weblink/foo1.png"
                  alt=""
                />
              </a>
              <a className="me-8" href="">
                <img
                  src="https://mikazuki.com.vn/vnt_upload/weblink/foo2.png"
                  alt=""
                />
              </a>
              <a className="me-8" href="">
                <img
                  src="https://mikazuki.com.vn/vnt_upload/weblink/foo3.png"
                  alt=""
                />
              </a>
              <a className="me-8" href="">
                <img
                  src="https://mikazuki.com.vn/vnt_upload/weblink/foo4.png"
                  alt=""
                />
              </a>
            </div>
            <div className="pt-2">
              <a href="">
                <img
                  src="https://mikazuki.com.vn/vnt_upload/weblink/imgfoo1.png"
                  alt=""
                />
              </a>
              <div className="social text-white text-lg pt-4">
                <FontAwesomeIcon className="me-2" icon={faFacebook} />
                <FontAwesomeIcon className="me-2" icon={faYoutube} />
                <FontAwesomeIcon className="me-2" icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="text-white text-sm mt-4">Copyright © 2024 BOOKING DA NANG. All rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
