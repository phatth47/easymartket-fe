import { Fragment, useContext, useEffect, useState } from "react";
import { CategoryContext } from ".";
import { IcClose } from "../../../image/ic_svg";
import { deleteCategory, getAllCategory } from "./FetchApi";

const DeleteCategoryModal = (props) => {
  const { data, dispatch } = useContext(CategoryContext);
  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  const [deleteCateData, setDeleteCateData] = useState({
    cId: "",
    cName: "",
    error: false,
    success: false,
  });

  useEffect(() => {
    setDeleteCateData({
      cId: data.deleteCategoryModal.cId,
      cName: data.deleteCategoryModal.cName,
    });
  }, [data.deleteCategoryModal]);

  const fetchData = async () => {
    let responseData = await getAllCategory();
    if (responseData.Categories) {
      dispatch({
        type: "fetchCategoryAndChangeState",
        payload: responseData.Categories,
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let responseData = await deleteCategory(deleteCateData.cId);
      if (responseData.success) {
        fetchData();
        dispatch({ type: "deleteCategoryModalClose" });
        dispatch({
          type: "showSnackbar",
          message: "Xóa danh mục thành công!",
        });
        return setDeleteCateData({
          ...deleteCateData,
          success: responseData.success,
        });
      } else if (responseData.error) {
        return setDeleteCateData({
          ...deleteCateData,
          error: responseData.error,
        });
      }
    } catch (error) {
      console.log(error);
      return setDeleteCateData({
        ...deleteCateData,
        error: "Có lỗi xảy ra, vui lòng thử lại!",
      });
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "deleteCategoryModalClose" })}
        className={`${
          data.deleteCategoryModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}
      {/* Modal */}
      <div
        className={`${
          data.deleteCategoryModal.modal ? "" : "hidden"
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Xóa danh mục
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) => dispatch({ type: "deleteCategoryModalClose" })}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <IcClose />
            </span>
          </div>
          {deleteCateData.error ? alert(deleteCateData.error, "red") : ""}
          <div className="w-full">
            <p className="text-black text-xl">
              Bạn có muốn xóa danh mục <b>{deleteCateData.cName}</b>? Sau khi
              xóa sẽ không thể khôi phục dữ liệu. Vui lòng xác nhận!
            </p>
          </div>

          <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
            <button
              style={{ background: "#303031" }}
              type="submit"
              className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
              onClick={(e) => submitForm(e)}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DeleteCategoryModal;
