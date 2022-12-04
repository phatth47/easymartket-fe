import * as React from "react";
import { UserContext } from "./index";
import { IcAdd } from "../../../image/ic_svg";
import EditUserModal from "./modal/EditUserModal";
import AddUserModal from "./modal/AddUserModal";
import DeleteUserModal from "./modal/DeleteUserModal";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "../../common/alert";

const UserMenu = (props) => {
  const { data, dispatch } = React.useContext(UserContext);
  return (
    <React.Fragment>
      <div className="col-span-1 flex justify-between items-center">
        <div className="flex items-center">
          <span
            style={{ background: "#303031" }}
            onClick={(e) => dispatch({ type: "addUserModal", payload: true })}
            className="rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
          >
            <IcAdd />
            Thêm người dùng
          </span>
        </div>
        <AddUserModal />
        <EditUserModal />
        <DeleteUserModal />
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
    </React.Fragment>
  );
};
export default UserMenu;
