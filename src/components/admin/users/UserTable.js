import React, { Fragment, useContext, useEffect, useMemo } from "react";
import { IcDelete, IcEdit, IcLoading } from "../../../image/ic_svg";
import moment from "moment";
import { useUsers } from "./UserQuery";
import { UserContext } from ".";

const UserTable = () => {
  const { status, data, error } = useUsers();
  // useEffect(() => {
  //   refetch();
  // }, [data, refetch]);

  // const userRes = useMemo(() => {
  //   return data?.Users || [];
  // }, [data]);

  return (
    <div>
      {status === "loading" ? (
        <div className="flex items-center justify-center p-8">
          <IcLoading />
        </div>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <UserTableDetail users={data.Users} />
        </>
      )}
    </div>
  );
};

const UserTableDetail = ({ users }) => {
  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Created at</th>
              <th className="px-4 py-2 border">Updated at</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((item, key) => {
                return <UserTableDetailRow user={item} key={key} />;
              })
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-xl text-center font-semibold py-8"
                >
                  No user found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {users && users.length} users found
        </div>
      </div>
    </Fragment>
  );
};

const UserTableDetailRow = ({ user }) => {
  const { dispatch } = useContext(UserContext);

  const editUser = (user) => {
    dispatch({
      type: "editUserModalOpen",
      user: { ...user },
    });
  };

  const deleteUser = (user) => {
    dispatch({
      type: "deleteUserModalOpen",
      user: { ...user },
    });
  };

  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left">{user.name}</td>
        <td className="p-2 text-left">{user.email}</td>
        <td className="p-2 text-center">{user.userRole}</td>
        <td className="p-2 text-center">
          {moment(user.createdAt).format("lll")}
        </td>
        <td className="p-2 text-center">
          {moment(user.updatedAt).format("lll")}
        </td>
        <td className="p-2 flex items-center justify-center">
          <span
            onClick={(e) => editUser(user)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <IcEdit />
          </span>
          <span
            onClick={(e) => deleteUser(user)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <IcDelete />
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserTable;
