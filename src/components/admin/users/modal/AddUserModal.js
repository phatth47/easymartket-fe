// import { useQueryClient } from "@tanstack/react-query";
import { Fragment, useContext, useState } from "react";
import { IcClose } from "../../../../image/ic_svg";
import { postUser } from "../FetchApi";
import { UserContext } from "../index";
import { useUsers } from "../UserQuery";

const AddUserModal = (props) => {
  return (
    <Fragment>
      <AddUserDetail />
    </Fragment>
  );
};

export default AddUserModal;

const AddUserDetail = () => {
  const { data, dispatch } = useContext(UserContext);

  const { refetch } = useUsers(false);

  // const queryClient = useQueryClient();

  // const users = queryClient.getQueryData("users");

  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  const [uData, setUdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
    userRole: 0,
    success: false,
    error: false,
  });

  const submitForm = async (e) => {
    e.preventDefault();
    e.target.reset();
    if (uData.cPassword !== uData.password) {
      return setUdata({
        ...uData,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
      });
    }

    try {
      let responseData = await postUser({
        name: uData.name,
        email: uData.email,
        phone: uData.phone,
        password: uData.password,
        cPassword: uData.cPassword,
        userRole: uData.userRole,
      });
      if (responseData.success) {
        refetch();
        // queryClient.setQueryData("users", {
        //   ...users,
        //   Users: [...users.Users, responseData.data],
        // });

        setUdata({
          ...uData,
          name: "",
          email: "",
          phone: "",
          password: "",
          cPassword: "",
          userRole: 0,
          success: responseData.success,
          error: false,
        });
      } else if (responseData.error) {
        setUdata({ ...uData, success: false, error: responseData.error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "addUserModal", payload: false })}
        className={`${
          data.addUserModal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.addUserModal ? "" : "hidden"
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Thêm người dùng
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) =>
                dispatch({ type: "addUserModal", payload: false })
              }
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <IcClose />
            </span>
          </div>
          {uData.error ? alert(uData.error, "red") : ""}
          {uData.success ? alert(uData.success, "green") : ""}
          <form className="w-full" onSubmit={(e) => submitForm(e)}>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  value={uData.name}
                  onChange={(e) =>
                    setUdata({
                      ...uData,
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
                <label htmlFor="name">Email *</label>
                <input
                  value={uData.email}
                  onChange={(e) =>
                    setUdata({
                      ...uData,
                      error: false,
                      success: false,
                      email: e.target.value,
                    })
                  }
                  className="px-4 py-2 border focus:outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="userRole">Role *</label>
                <select
                  value={uData.userRole}
                  onChange={(e) =>
                    setUdata({
                      ...uData,
                      error: false,
                      success: false,
                      userRole: e.target.value,
                    })
                  }
                  name="userRole"
                  className="px-4 py-2 border focus:outline-none"
                  id="userRole"
                >
                  <option name="userRole" value={0}>
                    User
                  </option>
                  <option name="userRole" value={1}>
                    Admin
                  </option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Số điện thoại *</label>
                <input
                  value={uData.phone}
                  onChange={(e) =>
                    setUdata({
                      ...uData,
                      error: false,
                      success: false,
                      phone: e.target.value,
                    })
                  }
                  className="px-4 py-2 border focus:outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Mật khẩu *</label>
                <input
                  onChange={(e) =>
                    setUdata({
                      ...uData,
                      error: false,
                      success: false,
                      password: e.target.value,
                    })
                  }
                  value={uData.password}
                  type="password"
                  id="password"
                  className={`${
                    uData.error.password ? "border-red-500" : ""
                  } px-4 py-2 focus:outline-none border`}
                />
                {!data.error ? "" : alert(data.error.password, "red")}
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Xác nhận mật khẩu *</label>
                <input
                  onChange={(e) =>
                    setUdata({
                      ...uData,
                      error: false,
                      success: false,
                      cPassword: e.target.value,
                    })
                  }
                  value={uData.cPassword}
                  type="password"
                  id="cPassword"
                  className={`${
                    uData.error.cPassword ? "border-red-500" : ""
                  } px-4 py-2 focus:outline-none border`}
                />
                {!data.error ? "" : alert(data.error.cPassword, "red")}
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
              <button
                style={{ background: "#303031" }}
                type="submit"
                className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
              >
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
