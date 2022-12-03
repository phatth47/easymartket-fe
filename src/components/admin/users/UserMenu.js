import React, { Fragment, useContext } from "react";
import { UserContext } from "./index";
import { IcAdd } from "../../../image/ic_svg";
import EditUserModal from "./modal/EditUserModal";
import AddUserModal from "./modal/AddUserModal";

const UserMenu = (props) => {
  const { dispatch } = useContext(UserContext);
  return (
    <Fragment>
      <div className="col-span-1 flex justify-between items-center">
        <div className="flex items-center">
          <span
            style={{ background: "#303031" }}
            onClick={(e) => dispatch({ type: "addUserModal", payload: true })}
            className="rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
          >
            <IcAdd />
            Add User
          </span>
        </div>
        <AddUserModal />
        <EditUserModal />
      </div>
    </Fragment>
  );
};
export default UserMenu;
