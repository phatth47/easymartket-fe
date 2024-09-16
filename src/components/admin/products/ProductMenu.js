import React, { Fragment, useContext } from "react";
import { ProductContext } from "./index";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import DeleteProductModal from "./DeleteProductModal";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "../../common/alert";

const ProductMenu = (props) => {
  const { data, dispatch } = useContext(ProductContext);
  return (
    <Fragment>
      <div className="col-span-1 flex justify-between items-center">
        <div className="flex items-center">
          {/* It's open the add product modal */}
          <span
            style={{ background: "#303031" }}
            onClick={(e) =>
              dispatch({ type: "addProductModal", payload: true })
            }
            className="rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Thêm Sản phẩm
          </span>
        </div>
        <AddProductModal />
        <EditProductModal />
        <DeleteProductModal />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={data.snackbarState.open}
          autoHideDuration={2000}
          onClose={(e) => dispatch({ type: "hideSnackbar" })}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            {data.snackbarState.message}
          </Alert>
        </Snackbar>
      </div>
    </Fragment>
  );
};

export default ProductMenu;
