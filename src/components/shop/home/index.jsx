import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
// import SingleProduct from "./SingleProduct";
import SlideProduct from "./SlideProduct";
import InfoService from "./InfoService";
import Brand from "./Brand";

import Title from "./Title";
import { getAllProduct } from "../../admin/products/FetchApi";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <section className="container  m-4 md:mx-auto md:my-4">
        <Slider />
      </section>
      {/* Category, Search & Filter Section */}
      <section className="container  m-4 md:mx-auto md:my-5">
        <ProductCategory />
      </section>
      {/* Product Section */}

      {/* Khuyến mãi */}
      <section className="container m-auto m-4 md:mx-auto md:my-5 ">
        <Title name="Khuyến mãi" />
        <SlideProduct styleShow="slide" />
        {/* <SingleProduct /> */}
      </section>
      {/* Sản phẩm nổi bật */}
      <section className="container m-4 md:mx-auto md:my-5">
        <Title name="Sản phẩm nổi bật" />
        <SlideProduct styleShow="grid" getAllProduct={getAllProduct()} />
      </section>
      {/* Thương hiệu nổi bật */}
      <section className="container m-4 md:mx-auto md:my-5 ">
        <Title name="Thương hiệu nổi bật" />
        <Brand getAllProduct={getAllProduct()} />
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
