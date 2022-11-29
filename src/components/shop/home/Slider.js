import React, { Fragment, useEffect, useContext, useState, useRef } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";
import { Parallax } from 'react-parallax';
const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  const [getValueScroll, setValueScroll] = useState();
  useEffect(() => {
    sliderImages(dispatch);
    const mouseWheelHandler = (e) => {
      const heightScreen = window.innerHeight;
      const smooth = e.offsetY
      setValueScroll(smooth / heightScreen * 100)
      console.log("totalScrollRef.current", e.deltaY, window.pageYOffset)

    };
    if (window.innerWidth > 767) {
      window.addEventListener("mousewheel", mouseWheelHandler);

      return () => {
        window.removeEventListener("mousewheel", mouseWheelHandler);
      };
    }

  }, []);

  return (
    <Fragment>
      {/* <Parallax bgImage="http://localhost:8000/uploads/customize/1669537266833_colorful-vegetables-and-fruits-vegan-food-in-royalty-free-image-1642437193.jpeg" bgImageAlt="the vegetable" strength={800}>
        Content goes here. Parallax height grows with content height.
      </Parallax> */}
      <div className="parallax_section relative ">
        {data.sliderImages.length > 0 ? (
          <Parallax
            className="slide parallax_bg  w-full"
            bgImage="http://localhost:8000/uploads/customize/1669537266833_colorful-vegetables-and-fruits-vegan-food-in-royalty-free-image-1642437193.jpeg"
            // style={{
            //   "backgroundImage": `url(${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage})`,
            // }}
            // src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          >

          </Parallax>
        ) : (
          ""
        )}
        <h2>Making cooking fun, easy & delicious!</h2>

        {/* {data?.sliderImages?.length > 0 ? (
          <>
            <svg
              onClick={(e) =>
                prevSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 left-0 mt-64 flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700  cursor-pointer hover:text-yellow-700`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              onClick={(e) =>
                nextSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#shop"
                style={{ background: "#303031" }}
                className="cursor-pointer box-border text-2xl text-white px-4 py-2 rounded"
              >
                Shop Now
              </a>
            </div>
          </>
        ) : null} */}
      </div>

      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
