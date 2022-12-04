import { Fragment, useContext, useEffect, useState } from "react";
import { ProductContext } from ".";
import { IcClose } from "../../../image/ic_svg";
import { deleteProduct, getAllProduct } from "./FetchApi";

const DeleteProductModal = (props) => {
  const { data, dispatch } = useContext(ProductContext);
  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  const [deleteProductData, setDeleteProductData] = useState({
    pId: "",
    pName: "",
    error: false,
    success: false,
  });

  useEffect(() => {
    setDeleteProductData({
      pId: data.deleteProductModal.pId,
      pName: data.deleteProductModal.pName,
    });
  }, [data.deleteProductModal]);

  const fetchData = async () => {
    let responseData = await getAllProduct();
    if (responseData && responseData.Products) {
      dispatch({
        type: "fetchProductsAndChangeState",
        payload: responseData.Products,
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let responseData = await deleteProduct(deleteProductData.pId);
      if (responseData.success) {
        fetchData();
        dispatch({ type: "deleteProductModalClose" });
        dispatch({
          type: "showSnackbar",
          message: "Xóa sản phẩm thành công!",
        });
        return setDeleteProductData({
          ...deleteProductData,
          success: responseData.success,
        });
      } else if (responseData.error) {
        return setDeleteProductData({
          ...deleteProductData,
          error: responseData.error,
        });
      }
    } catch (error) {
      console.log(error);
      return setDeleteProductData({
        ...deleteProductData,
        error: "Có lỗi xảy ra, vui lòng thử lại!",
      });
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "deleteUserModalClose" })}
        className={`${
          data.deleteProductModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}
      {/* Modal */}
      <div
        className={`${
          data.deleteProductModal.modal ? "" : "hidden"
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Xóa sản phẩm
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) => dispatch({ type: "deleteProductModalClose" })}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <IcClose />
            </span>
          </div>
          {deleteProductData.error ? alert(deleteProductData.error, "red") : ""}
          <div className="w-full">
            <p className="text-black text-xl">
              Bạn có muốn xóa sản phẩm <b>{deleteProductData.pName}</b>? Sau khi
              xóa sẽ không thể khôi phục dữ liệu. Các đơn hàng có thể bị ảnh
              hưởng. Vui lòng xác nhận!
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

export default DeleteProductModal;
