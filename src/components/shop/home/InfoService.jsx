import React, {
  Fragment,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";

const apiURL = process.env.REACT_APP_API_URL;

const InfoService = (props) => {
  return (
    <>
      <div className="list-service container md:mx-auto ">
        <div className="box-icon">
          <img src="/images/service/13.webp" alt="logo" />
          <p>Dùng thử miễn phí</p>
        </div>
        <div className="box-icon">
          <img src="/images/service/14.webp" alt="logo" />
          <p>Đổi trả miễn phí</p>
        </div>
        <div className="box-icon">
          <img src="/images/service/15.webp" alt="logo" />
          <p>Tư vấn trung thực</p>
        </div>
        <div className="box-icon">
          <img src="/images/service/16.webp" alt="logo" />
          <p>Sản phẩm chính hãng</p>
        </div>
      </div>
      <div className="info-contact  ">
        <p className="container m-auto">
          Sự hài lòng của Quý khách là ưu tiên hàng đầu của Easymarket. Hotline:
          <b>0789 355 777</b>
        </p>
      </div>
    </>
  );
};

export default InfoService;
