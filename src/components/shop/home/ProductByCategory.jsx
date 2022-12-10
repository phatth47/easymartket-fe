import React, { Fragment, useEffect, useState } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import ListProduct from "./ListProduct";

import { useHistory, useParams } from "react-router-dom";
import Layout from "../layout";

import { productByCategory } from "../../admin/products/FetchApi";

const apiURL = process.env.REACT_APP_API_URL;

const Submenu = ({ category }) => {
  const history = useHistory();
  const [wList, setWlist] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );
  return (
    <Fragment>
      {/* Submenu Section */}
      <section className=" mb-4 mt-4 ">
        <div className="flex justify-between items-center">
          <div className="text-lg flex space-x-3">
            <span
              className="hover:text-yellow-700 cursor-pointer"
              onClick={(e) => history.push("/")}
            >
              Trang chủ
            </span>
            <span className="text-yellow-700 cursor-default">{category}</span>
          </div>
          <div>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* Submenu Section */}
    </Fragment>
  );
};

const AllProduct = ({ products }) => {
  const history = useHistory();
  const category =
    products && products.length > 0 ? products[0].pCategory.cName : "";
  // console.log("category", category);
  return (
    <Fragment>
      <Submenu category={category} />
      {/* Category, Search & Filter Section */}
      {/* <section className="container  m-4 md:mx-auto md:my-5"> */}
      {/* <ProductCategoryDropdown /> */}
      {/* </section> */}
      <ListProduct styleShow="grid" data={products} />
      <img src="/images/banner.jpg" alt="banner" />
    </Fragment>
  );
};

const PageComponent = () => {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catId]);

  const fetchData = async () => {
    try {
      let responseData = await productByCategory(catId);
      if (responseData && responseData.Products) {
        setProducts(responseData.Products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="container m-auto">
        <AllProduct products={products} />
      </div>
    </Fragment>
  );
};

const ProductByCategory = (props) => {
  return (
    <Fragment>
      <Layout children={<PageComponent />} />
    </Fragment>
  );
};

export default ProductByCategory;
