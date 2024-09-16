import React, { Fragment } from "react";
import InfoService from "../home/InfoService";
import "./style.css";

const Footer = (props) => {
  return (
    <Fragment>
      <div
        className="w-full md:mx-auto md:my-5"
        style={{ backgroundColor: "rgb(220, 220, 220)" }}
      >
        <InfoService />
      </div>
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
              Easymarket.vn để phục vụ cho mọi đối tượng, đặc biệt là nhóm khách
              hàng trẻ.
            </p>
          </div>
          <div className="address-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6611225954575!2d106.82842601533444!3d10.83722446103066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175211a1d77cb9b%3A0xd8ec8eb530841276!2sVinhomes%20Grand%20Park!5e0!3m2!1svi!2s!4v1670668719838!5m2!1svi!2s"
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
                {/* <i class="icon-facebook"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="/"
                target="_blank"
                data-label="Instagram"
                rel="noopener noreferrer nofollow"
                class="icon-ins icon-footer"
                aria-label="Follow on Instagram"
              >
                {/* <i class="icon-instagram"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
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
              <p>Tư vấn: 0123 456 789 | Hợp tác: 0123 456 789</p>
              <p>
                Vinhomes Grand Park, Nguyễn Xiển, Long Thạnh Mỹ, Quận 9, Thành
                phố Hồ Chí Minh
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
