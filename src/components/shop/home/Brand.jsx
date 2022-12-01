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
  const { products } = data;
  const history = useHistory();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await props.getAllProduct;
      setTimeout(() => {
        if (responseData && responseData.Products) {
          dispatch({ type: "setProducts", payload: responseData.Products });
          dispatch({ type: "loading", payload: false });
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  // function importAll(r) {
  //   let images = {};
  //   r.keys().map((item, index) => {
  //     images[item.replace("./", "")] = r(item);
  //   });
  //   return images;
  // }

  // const images = importAll(
  //   require.context("/images/brand", false, /\.(png|jpe?g|svg]webp)$/)
  // );
  // // const images = getImgUrl("brand");

  // console.log("images", images);

  return (
    <div className="relative">
      <div className="w-full list-item-grid list-item-brand">
        {products && products.length > 0 ? (
          products.map((item, index) => {
            return (
              <div key={index}>
                <div className="block-item relative">
                  <div className="picture_item  logo-brand m-auto">
                    <img
                      onClick={(e) => history.push(`/products/${item._id}`)}
                      className="object-cover object-center cursor-pointer"
                      // src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                      src="images/brand/suavecito-logo.webp"
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
