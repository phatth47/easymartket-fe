import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import "./style.css";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        // style={{ background: "#303031", color: "#87898A" }}
        className=" z-10 py-6 px-4 md:px-12 text-center "
      >
        <div className=" box-footer container">
          <div className="logo-box ">
            <img
              className="m-auto"
              src="/logo.png"
              style={{ width: "60%" }}
              alt="logo"
            />

            <p>
              Chúng tôi mong muốn mang đến sự nhanh chóng và tiện lợi tối đa khi
              mua sắm đến cho khách hàng bằng việc đưa hệ thống siêu thị
              Easymarket bằng hình thức mua sắm online trên website
              Easymarket.com để phục vụ cho mọi đối tượng, đặc biệt là nhóm
              khách hàng trẻ.
            </p>
          </div>
          <div className="address-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.8320718211513!2d106.67135510979381!3d10.785744392321465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8e2f41d937%3A0xa750f1fdfbcf6750!2sLEO%20coffee%20%26%20tea!5e0!3m2!1svi!2s!4v1670320070074!5m2!1svi!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="info-box">
            <div className="social-chanel">
              <a
                href="/"
                target="_blank"
                data-label="Facebook"
                rel="noopener noreferrer nofollow"
                class="icon-fb icon-footer"
                aria-label="Follow on Facebook"
              >
                <i class="icon-facebook"></i>
              </a>
              <a
                href="/"
                target="_blank"
                data-label="Instagram"
                rel="noopener noreferrer nofollow"
                class="icon-ins icon-footer"
                aria-label="Follow on Instagram"
              >
                <i class="icon-instagram"></i>
              </a>
              <a
                href="/"
                target="_blank"
                data-label="TikTok"
                rel="noopener noreferrer nofollow"
                class="icon-tiktok icon-footer"
                aria-label="Follow on Tiktok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
              </a>
              <a
                href="/"
                target="_blank"
                data-label="Mail"
                rel="noopener noreferrer nofollow"
                class="icon-mail icon-footer"
                aria-label="Follow on Mail"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </a>
            </div>
            <div className="contact">
              <p>Tư vấn: 0931 255 777 | Hợp tác: 0789 355 777</p>
              <p>
                Hẻm 237 Trần Văn Đang, Phường 11, Quận 3, Thành phố Hồ Chí Minh,
                Việt Nam
              </p>
              <p>Thời gian làm việc: Từ 8h30 - 21h30 (Hàng ngày)</p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
