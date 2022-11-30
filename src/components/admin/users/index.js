import React, { createContext, Fragment, useReducer } from "react";
import AdminLayout from "../layout";
import UserMenu from "./UserMenu";
import { userState, userReducer } from "./UserContext";
import UserTable from "./UserTable";

export const UserContext = createContext();

const Users = () => {
  const [data, dispatch] = useReducer(userReducer, userState);

  return (
    <Fragment>
      <UserContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<UserComponent />} />
      </UserContext.Provider>
    </Fragment>
  );
};

const UserComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <UserMenu />
      <UserTable />
    </div>
  );
};

export default Users;
