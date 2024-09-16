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

const apiURL = process.env.REACT_APP_API_URL;

const Brand = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  // const { products } = data;
  const history = useHistory();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   dispatch({ type: "loading", payload: true });
  //   try {
  //     let responseData = await props.getAllProduct;
  //     setTimeout(() => {
  //       if (responseData && responseData.Products) {
  //         dispatch({ type: "setProducts", payload: responseData.Products });
  //         dispatch({ type: "loading", payload: false });
  //       }
  //     }, 500);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const product = [
    {
      name: "apestomen-logo",
    },
    {
      name: "dapper-dan-logo",
    },
    {
      name: "kent-brushes-logo",
    },
    {
      name: "kevin-logo",
    },
    {
      name: "logo_edwin",
    },
    {
      name: "LOGO-JACKBLACK",
    },
    {
      name: "logo-parker",
    },
    {
      name: "logo-proraso",
    },
    {
      name: "logo-taylor",
    },
  ];

  return (
    <div className="relative">
      <div className="w-full list-item-grid list-item-brand">
        {product && product.length > 0 ? (
          product.map((item, index) => {
            return (
              <div key={index}>
                <div className="block-brand relative">
                  <div className="picture_brand  logo-brand m-auto">
                    <img
                      // onClick={(e) => history.push(`/products/${item._id}`)}
                      className="object-cover object-center cursor-pointer"
                      // src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                      src={`images/brand/${item.name}.webp`}
                      alt="product"
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
            No brand found
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
