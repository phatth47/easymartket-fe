import React, {
  Fragment,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";
import { useHistory } from "react-router-dom";
// import { getAllProduct } from "../../admin/products/FetchApi";
import { HomeContext } from ".";
import { isWishReq, unWishReq, isWish } from "./Mixins";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDiscountPrice, getPrice } from "../../common/price";
const apiURL = process.env.REACT_APP_API_URL;

const ListProduct = ({ data, styleShow }) => {
  // const { data, dispatch } = useContext(HomeContext);
  // const { products } = data;
  const history = useHistory();
  const slider = useRef();
  /* WhisList State */
  const [wList, setWlist] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );

  const settings = {
    dots: false,
    className: "slide-product",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          // dots: true,
          infinite: true,
          speed: 400,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          // dots: true,
          infinite: true,
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="relative">
      {styleShow == "slide" ? (
        <>
          <Slider ref={slider} {...settings} className="w-full list-item">
            {data && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <div key={index} className="block-item relative">
                    {item.pOffer > 0 ? (
                      <div className="promotion absolute">-{item.pOffer}%</div>
                    ) : (
                      ""
                    )}
                    <div className="picture_item">
                      <img
                        onClick={(e) => history.push(`/products/${item._id}`)}
                        className="object-cover object-center cursor-pointer"
                        src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                        alt="product"
                      />
                    </div>
                    <div className="name_item">{item.pName}</div>
                    <div className="price_item">
                      {item.pOffer > 0 ? (
                        <>
                          <div className="price_before">
                            {/* {item.pPrice
                              .toFixed(0)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                            đ */}
                            {getPrice(item.pPrice)}
                          </div>
                          <div className="price_after">
                            {getDiscountPrice({
                              pOffer: item.pOffer,
                              pPrice: item.pPrice,
                            })}
                          </div>
                        </>
                      ) : (
                        <div className="price_current">
                          {getPrice(item.pPrice)}
                        </div>
                      )}
                    </div>
                    {/* WhisList Logic  */}
                    <div className="absolute top-0 right-0 mx-2 my-2 md:mx-4">
                      <svg
                        onClick={(e) => isWishReq(e, item._id, setWlist)}
                        className={`${
                          isWish(item._id, wList) && "hidden"
                        } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <svg
                        onClick={(e) => unWishReq(e, item._id, setWlist)}
                        className={`${
                          !isWish(item._id, wList) && "hidden"
                        } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {/* WhisList Logic End */}
                  </div>
                );
              })
            ) : (
              <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
                No product found
              </div>
            )}
          </Slider>
          <button
            className="btn-prev"
            onClick={() => slider?.current?.slickPrev()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
            </svg>
          </button>
          <button
            className="btn-next"
            onClick={() => slider?.current?.slickNext()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
            </svg>
          </button>
        </>
      ) : (
        <div className="w-full list-item-grid">
          {data && data.length > 0 ? (
            data.map((item, index) => {
              return (
                <div className="block-item relative">
                  {item.pOffer > 0 ? (
                    <div className="promotion absolute">-{item.pOffer}%</div>
                  ) : (
                    ""
                  )}
                  {/* <div className="promotion absolute">-{item.pOffer}%</div> */}
                  <div className="picture_item">
                    <img
                      onClick={(e) => history.push(`/products/${item._id}`)}
                      className="object-cover object-center cursor-pointer"
                      src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                      alt="product"
                    />
                  </div>
                  <div className="name_item">{item.pName}</div>
                  <div className="price_item">
                    {item.pOffer > 0 ? (
                      <>
                        <div className="price_before">
                          {getPrice(item.pPrice)}
                        </div>
                        <div className="price_after">
                          {getDiscountPrice({
                            pOffer: item.pOffer,
                            pPrice: item.pPrice,
                          })}
                        </div>
                      </>
                    ) : (
                      <div className="price_current">
                        {getPrice(item.pPrice)}
                      </div>
                    )}
                  </div>

                  {/* WhisList Logic  */}
                  <div className="absolute top-0 right-0 mx-2 my-2 md:mx-4">
                    <svg
                      onClick={(e) => isWishReq(e, item._id, setWlist)}
                      className={`${
                        isWish(item._id, wList) && "hidden"
                      } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <svg
                      onClick={(e) => unWishReq(e, item._id, setWlist)}
                      className={`${
                        !isWish(item._id, wList) && "hidden"
                      } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* WhisList Logic End */}
                </div>
              );
            })
          ) : (
            <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
              No product found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListProduct;
