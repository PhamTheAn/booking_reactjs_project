import React, { PureComponent } from "react";
const About = () => {
  return (
    <>
      <div className="w-full relative h-96 my-10 ">
        <div className=" absolute z-0 top-0 right-0">
          <img
            src="https://mikazuki.com.vn/vnt_upload/banner/10_2021/hoadao.jpg"
            alt=""
          />
        </div>
        <div className=" absolute z-0 bottom-0 left-0 w-96 h-96">
          <img
            src="https://mikazuki.com.vn/vnt_upload/banner/12_2021/Ngu_Thap_a.png"
            alt=""
          />
        </div>
        <div className="max-w-[1200px] mx-auto">
          <div className="mx-48 ">
            <div className="my-6 text-4xl text-center font-serif bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
              BOOKING DA NANG
            </div>
            <div className="font-mono my-2">
              Mang nét văn hóa tinh túy đậm đà Á Đông, Nhật Bản là nơi vẻ đẹp
              thiên nhiên, văn hóa và ẩm thực luôn được ca tụng. Với tinh thần
              lan tỏa tinh hoa văn hóa Nhật Bản trên đất Việt, BOOKING DANANG
              được lấy cảm hứng là nơi đất trời hội tụ và nhịp sống bắt đầu. Đến
              với chúng tôi để sẵn sàng cho một hành trình khám phá đầy thú vị
              với những giá trị chuẩn Nhật chưa từng có tại một tổ hợp nghỉ
              dưỡng đạt chuẩn 5 sao ngay tại Đà Nẵng.
            </div>
            <div className="font-mono my-2">
              Được tạo hóa ưu đãi với bờ biển trong xanh quyến rũ, Vịnh Đà Nẵng
              là nơi tọa lạc của BOOKING DA NANG, một tổ hợp nghỉ dưỡng được quản lý bởi CÔNG TY TNHH BOOKING VIỆT NAM. 
              Trên diện tích 13 hecta, BOOKING DA NANG mang đến cho bạn
              nhiều loại hình dịch vụ hấp dẫn, mang đậm bản sắc văn hóa Nhật
              Bản.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
