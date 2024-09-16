import React, { Fragment, useContext } from "react";
import { CategoryContext } from "./index";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "../../common/alert";

const CategoryMenu = (props) => {
  const { data, dispatch } = useContext(CategoryContext);

  return (
    <Fragment>
      <div className="col-span-1 flex items-center">
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center w-full">
          {/* It's open the add category modal */}
          <div
            style={{ background: "#303031" }}
            onClick={(e) =>
              dispatch({ type: "addCategoryModal", payload: true })
            }
            className="cursor-pointer rounded-full p-2 flex items-center justify-center text-gray-100 text-sm font-semibold uppercase"
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
            Thêm danh mục
          </div>
        </div>
        <AddCategoryModal />
        <EditCategoryModal />
        <DeleteCategoryModal />
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

export default CategoryMenu;
