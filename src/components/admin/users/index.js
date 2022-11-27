import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import { userState, userReducer } from "./UserContext";

/* This context manage all of the users component's data */
export const UserContext = createContext();

const UserComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
    
    </div>
  );
};

const Users = (props) => {
  /* To use useReducer make sure that reducer is the first arg */
  const [data, dispatch] = useReducer(userReducer, userState);

  return (
    <Fragment>
      <UserContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<UserComponent />} />
      </UserContext.Provider>
    </Fragment>
  );
};

export default Users;
