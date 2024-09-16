import React, { createContext, Fragment, useReducer } from "react";
import AdminLayout from "../layout";
import { userReducer, userState } from "./UserContext";
import UserMenu from "./UserMenu";
import UserTable from "./UserTable";

export const UserContext = createContext();

const Users = () => {
  return (
    <Fragment>
      <AdminLayout children={<UserComponent />} />
    </Fragment>
  );
};

const UserComponent = () => {
  const [data, dispatch] = useReducer(userReducer, userState);

  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <UserContext.Provider value={{ data, dispatch }}>
        <UserMenu />
        <UserTable />
      </UserContext.Provider>
    </div>
  );
};

export default Users;
