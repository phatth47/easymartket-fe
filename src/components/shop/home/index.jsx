import React, {
  Fragment,
  createContext,
  useEffect,
  useReducer,
  useState,
  useContext,
} from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
// import SingleProduct from "./SingleProduct";
import ListProduct from "./ListProduct";
import InfoService from "./InfoService";
import Brand from "./Brand";

import Title from "./Title";
import {
  getPromotedProducts,
  getBestProducts,
} from "../../admin/products/FetchApi";

export const HomeContext = createContext();

const HomeComponent = () => {
  const [promotedProducts, setPromotedProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const { data, dispatch } = useContext(HomeContext);

  useEffect(() => {
    (async () => {
      dispatch({ type: "loading", payload: true });
      try {
        let responseData = await getPromotedProducts();
        setTimeout(() => {
          if (responseData && responseData.Products) {
            setPromotedProducts(responseData.Products);
            dispatch({ type: "loading", payload: false });
          }
        }, 200);
      } catch (error) {
        console.log(error);
      }
    })();

    (async () => {
      dispatch({ type: "loading", payload: true });
      try {
        let responseData = await getBestProducts();
        setTimeout(() => {
          if (responseData && responseData.Products) {
            setBestProducts(responseData.Products);
          }
        }, 200);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    })();
  }, []);

  return (
    <Fragment>
      <section
        className="container  m-4 md:mx-auto md:my-4"
        style={{ marginTop: 0 }}
      >
        <Slider />
      </section>
      {/* Category, Search & Filter Section */}
      {/* <section className="container  m-4 md:mx-auto md:my-5">
        <ProductCategory />
      </section> */}
      {/* Product Section */}

      {/* Khuyến mãi */}
      <section className="container m-4 md:mx-auto md:my-5 ">
        <Title name="Khuyến mãi" />
        <ListProduct styleShow="slide" data={promotedProducts} />
        {/* <SingleProduct /> */}
      </section>
      {/* Sản phẩm nổi bật */}
      <section className="container m-4 md:mx-auto md:my-5">
        <Title name="Sản phẩm nổi bật" />
        <ListProduct styleShow="grid" data={bestProducts} />
      </section>
      {/* Thương hiệu nổi bật */}
      <section className="container m-4 md:mx-auto md:my-5 ">
        <Title name="Thương hiệu nổi bật" />
        <Brand />
      </section>
      {/* Thông tin dịch vụ */}
      <section
        className="w-full m-4 md:mx-auto md:my-5"
        style={{ backgroundColor: "rgb(220, 220, 220)" }}
      >
        <InfoService />
      </section>
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
