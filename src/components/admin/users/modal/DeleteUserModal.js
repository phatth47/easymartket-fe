import { Fragment, useContext, useEffect, useState } from "react";
import { UserContext } from "..";
import { IcClose } from "../../../../image/ic_svg";
import { deleteUser } from "../FetchApi";
import { useUsers } from "../UserQuery";

const DeleteUserModal = (props) => {
  const { data, dispatch } = useContext(UserContext);
  const { refetch } = useUsers(false);

  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  const [deleteUserData, setDeleteUserData] = useState({
    uId: "",
    name: "",
    error: false,
    success: false,
  });

  useEffect(() => {
    setDeleteUserData({
      uId: data.deleteUserModal.uId,
      name: data.deleteUserModal.name,
    });
  }, [data.deleteUserModal]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let responseData = await deleteUser(deleteUserData);
      if (responseData.success) {
        refetch();
        dispatch({ type: "deleteUserModalClose" });
        dispatch({
          type: "showSnackbar",
          message: "Xóa người dùng thành công!",
        });
        return setDeleteUserData({
          ...deleteUserData,
          success: responseData.success,
        });
      } else if (responseData.error) {
        return setDeleteUserData({
          ...deleteUserData,
          error: responseData.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "deleteUserModalClose" })}
        className={`${
          data.deleteUserModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}
      {/* Modal */}
      <div
        className={`${
          data.deleteUserModal.modal ? "" : "hidden"
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Xóa người dùng
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) => dispatch({ type: "deleteUserModalClose" })}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <IcClose />
            </span>
          </div>
          {deleteUserData.error ? alert(deleteUserData.error, "red") : ""}

          <div className="w-full">
            <p className="text-black text-xl">
              Bạn có muốn xóa tài khoản người dùng <b>{deleteUserData.name}</b>?
              Sau khi xóa sẽ không thể khôi phục dữ liệu.
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

export default DeleteUserModal;
