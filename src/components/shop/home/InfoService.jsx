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
      <div className="list-service container md:mx-auto block-item">
        <div className="box-icon">
          <img src="/images/service/13.webp" alt="logo" />
          <p>Dùng thử miễn phí</p>
        </div>
        <div className="box-icon">
          <img src="/images/service/14.webp" alt="logo" />
          <p>Dùng thử miễn phí</p>
        </div>
        <div className="box-icon">
          <img src="/images/service/15.webp" alt="logo" />
          <p>Dùng thử miễn phí</p>
        </div>
        <div className="box-icon">
          <img src="/images/service/16.webp" alt="logo" />
          <p>Dùng thử miễn phí</p>
        </div>
      </div>
      <div className="info-contact">
        <p>
          Sự hài lòng của Quý khách là ưu tiên hàng đầu của Classic. Hotline:{" "}
          <b>0789 355 777</b>{" "}
        </p>
      </div>
    </>
  );
};

export default InfoService;
