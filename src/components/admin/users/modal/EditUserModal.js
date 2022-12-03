import { Fragment, useContext, useEffect, useState } from "react";
import { UserContext } from "..";
import { IcClose } from "../../../../image/ic_svg";
import { putUser } from "../FetchApi";
import { useUsers } from "../UserQuery";

const EditUserModal = (props) => {
  const { data, dispatch } = useContext(UserContext);
  const { refetch } = useUsers(false);

  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  const [editFormData, setEditFormData] = useState({
    uId: "",
    name: "",
    phone: "",
    error: false,
    success: false,
  });

  useEffect(() => {
    setEditFormData({
      uId: data.editUserModal.uId,
      name: data.editUserModal.name,
      phone: data.editUserModal.phone,
    });
  }, [data.editUserModal]);

  const submitForm = async (e) => {
    e.preventDefault();
    e.target.reset();
    try {
      let responseData = await putUser(editFormData);
      if (responseData.success) {
        refetch();
        return setEditFormData({
          ...editFormData,
          success: responseData.success,
        });
      } else if (responseData.error) {
        return setEditFormData({
          ...editFormData,
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
        onClick={(e) => dispatch({ type: "editUserModalClose" })}
        className={`${
          data.editUserModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.editUserModal.modal ? "" : "hidden"
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Edit User
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) => dispatch({ type: "editUserModalClose" })}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <IcClose />
            </span>
          </div>
          {editFormData.error ? alert(editFormData.error, "red") : ""}
          {editFormData.success ? alert(editFormData.success, "green") : ""}
          <form className="w-full" onSubmit={(e) => submitForm(e)}>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Full Name *</label>
                <input
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      error: false,
                      success: false,
                      name: e.target.value,
                    })
                  }
                  className="px-4 py-2 border focus:outline-none"
                  type="text"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="price">Phone *</label>
                <input
                  value={editFormData.phone}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      error: false,
                      success: false,
                      phone: e.target.value,
                    })
                  }
                  type="tel"
                  className="px-4 py-2 border focus:outline-none"
                  id="phone"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
              <button
                style={{ background: "#303031" }}
                type="submit"
                className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUserModal;